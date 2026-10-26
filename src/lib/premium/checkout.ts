import "server-only";

import { getPaymentsConfig } from "./config";

const TIMEOUT_MS = 10_000;
const MAX_RESPONSE_BYTES = 16_384;

export type CheckoutRequest = {
  userId: string;
  email: string;
  origin: string | null;
};

export type CheckoutResult =
  | { status: "created"; url: string }
  | { status: "unconfigured" }
  | { status: "error"; message: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function parseHostedUrl(value: unknown): string | null {
  if (typeof value !== "string" || value.length > 2048) {
    return null;
  }

  try {
    const url = new URL(value);
    const isLocalHost =
      url.hostname === "localhost" || url.hostname === "127.0.0.1";

    if (url.protocol === "https:" || (url.protocol === "http:" && isLocalHost)) {
      return url.href;
    }
  } catch {
    return null;
  }

  return null;
}

function readCheckoutUrl(payload: unknown): string | null {
  if (!isRecord(payload)) {
    return null;
  }

  const direct = parseHostedUrl(payload.url) ?? parseHostedUrl(payload.checkoutUrl);

  if (direct) {
    return direct;
  }

  return isRecord(payload.data)
    ? parseHostedUrl(payload.data.url) ?? parseHostedUrl(payload.data.checkoutUrl)
    : null;
}

/**
 * Starts a hosted checkout through the normalized provider contract documented
 * in docs/premium-payments-setup.md. The price and product are read only from
 * server-side environment configuration; nothing in the request body can change
 * the amount. No card data passes through this application.
 */
export async function createMembershipCheckout(
  request: CheckoutRequest,
): Promise<CheckoutResult> {
  const config = getPaymentsConfig();

  if (!config) {
    return { status: "unconfigured" };
  }

  const checkoutEndpoint = parseHostedUrl(config.checkoutUrl);

  if (!checkoutEndpoint) {
    return {
      status: "error",
      message: "The payment provider endpoint is not a secure URL.",
    };
  }

  const successUrl =
    config.successUrl ??
    (request.origin
      ? new URL("/premium?checkout=success", request.origin).href
      : null);

  const cancelUrl =
    config.cancelUrl ??
    (request.origin
      ? new URL("/premium?checkout=cancelled", request.origin).href
      : null);

  if (!successUrl || !cancelUrl) {
    return {
      status: "error",
      message: "The site origin is not available for checkout redirects.",
    };
  }

  let response: Response;

  try {
    response = await fetch(checkoutEndpoint, {
      method: "POST",
      cache: "no-store",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        authorization: `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify({
        provider: config.provider,
        productId: config.productId,
        price: {
          amount: config.priceAmount,
          currency: config.priceCurrency,
          interval: config.interval,
        },
        customer: {
          userId: request.userId,
          email: request.email,
        },
        metadata: {
          userId: request.userId,
          tier: "premium",
        },
        successUrl,
        cancelUrl,
      }),
    });
  } catch {
    return {
      status: "error",
      message:
        "We couldn't reach the payment provider. Nothing was charged; try again in a moment.",
    };
  }

  if (!response.ok) {
    return {
      status: "error",
      message:
        "The payment provider did not open a checkout session. Nothing was charged; try again later.",
    };
  }

  const raw = await response.text().catch(() => "");

  if (raw.length === 0 || raw.length > MAX_RESPONSE_BYTES) {
    return {
      status: "error",
      message: "The payment provider returned an unexpected response.",
    };
  }

  let payload: unknown;

  try {
    payload = JSON.parse(raw) as unknown;
  } catch {
    return {
      status: "error",
      message: "The payment provider returned an unexpected response.",
    };
  }

  const url = readCheckoutUrl(payload);

  if (!url) {
    return {
      status: "error",
      message: "The payment provider did not return a checkout address.",
    };
  }

  return { status: "created", url };
}
