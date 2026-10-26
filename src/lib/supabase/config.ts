const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";

const rawKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?.trim() ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
  "";

function isValidHttpUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

const configured = rawUrl.length > 0 && rawKey.length > 0 && isValidHttpUrl(rawUrl);

export const isSupabaseConfigured = configured;

export type SupabaseConfig = {
  url: string;
  publishableKey: string;
};

export function getSupabaseConfig(): SupabaseConfig | null {
  if (!configured) {
    return null;
  }

  return { url: rawUrl, publishableKey: rawKey };
}
