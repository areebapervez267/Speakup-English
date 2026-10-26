const PROVIDER_PATTERN = /^[a-z0-9][a-z0-9_-]*$/;
const CURRENCY_PATTERN = /^[A-Z]{3}$/;

function readEnv(name: string): string {
  return process.env[name]?.trim() ?? "";
}

function readPositiveInteger(value: string): number | null {
  if (!/^[1-9][0-9]{0,11}$/.test(value)) {
    return null;
  }

  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
}

export type PaymentsConfig = {
  provider: string;
  checkoutUrl: string;
  apiKey: string;
  priceLabel: string;
  priceCurrency: string;
  priceAmount: number;
  productId: string;
  interval: string;
  successUrl: string | null;
  cancelUrl: string | null;
};

export type PaymentsDisplay = {
  provider: string | null;
  priceLabel: string | null;
  checkoutReady: boolean;
  checkoutReason:
    | "ready"
    | "provider-not-supported"
    | "checkout-missing"
    | "webhook-missing"
    | "service-role-missing";
};

function parseHttpUrl(value: string): string | null {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}

function parseProvider(): string | null {
  const provider = readEnv("PAYMENTS_PROVIDER").toLowerCase();
  return PROVIDER_PATTERN.test(provider) && provider.length <= 40 ? provider : null;
}

/**
 * The provider name used to match stored memberships and webhook payloads.
 * Only `generic` is supported until a provider-specific adapter is implemented.
 */
export function getPaymentProvider(): string | null {
  return parseProvider();
}

/**
 * Checkout configuration is read only on the server. Amounts are always read
 * from the environment here, never from a checkout request body.
 */
export function getPaymentsConfig(): PaymentsConfig | null {
  const provider = parseProvider();
  const checkoutUrl = parseHttpUrl(readEnv("PAYMENTS_CHECKOUT_URL"));
  const apiKey = readEnv("PAYMENTS_API_KEY");
  const priceLabel = readEnv("PAYMENTS_PRICE_LABEL");
  const priceCurrency = readEnv("PAYMENTS_PRICE_CURRENCY").toUpperCase();
  const priceAmount = readPositiveInteger(readEnv("PAYMENTS_PRICE_AMOUNT"));
  const productId = readEnv("PAYMENTS_PRODUCT_ID");
  const interval = readEnv("PAYMENTS_INTERVAL") || "month";

  if (
    !provider ||
    !checkoutUrl ||
    !apiKey ||
    !priceLabel ||
    !CURRENCY_PATTERN.test(priceCurrency) ||
    priceAmount === null ||
    !productId
  ) {
    return null;
  }

  return {
    provider,
    checkoutUrl,
    apiKey,
    priceLabel,
    priceCurrency,
    priceAmount,
    productId,
    interval,
    successUrl: parseHttpUrl(readEnv("PAYMENTS_SUCCESS_URL")),
    cancelUrl: parseHttpUrl(readEnv("PAYMENTS_CANCEL_URL")),
  };
}

export function getWebhookSecret(): string | null {
  const secret = readEnv("PAYMENTS_WEBHOOK_SECRET");
  return secret.length >= 16 ? secret : null;
}

export function hasServiceRoleKey(): boolean {
  return readEnv("SUPABASE_SERVICE_ROLE_KEY").length > 0;
}

export function getPaymentsDisplay(): PaymentsDisplay {
  const provider = parseProvider();
  const config = getPaymentsConfig();
  const priceLabel = readEnv("PAYMENTS_PRICE_LABEL") || null;

  if (!provider) {
    return {
      provider: null,
      priceLabel,
      checkoutReady: false,
      checkoutReason: "provider-not-supported",
    };
  }

  if (!config) {
    return {
      provider,
      priceLabel,
      checkoutReady: false,
      checkoutReason: "checkout-missing",
    };
  }

  if (provider !== "generic") {
    return {
      provider,
      priceLabel,
      checkoutReady: false,
      checkoutReason: "provider-not-supported",
    };
  }

  if (!getWebhookSecret()) {
    return {
      provider,
      priceLabel,
      checkoutReady: false,
      checkoutReason: "webhook-missing",
    };
  }

  if (!hasServiceRoleKey()) {
    return {
      provider,
      priceLabel,
      checkoutReady: false,
      checkoutReason: "service-role-missing",
    };
  }

  return {
    provider,
    priceLabel,
    checkoutReady: true,
    checkoutReason: "ready",
  };
}

export function isCheckoutConfigured(): boolean {
  return getPaymentsDisplay().checkoutReady;
}
