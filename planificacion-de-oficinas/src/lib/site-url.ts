function normalizeUrl(value: string | undefined): string | null {
  const raw = value?.trim().replace(/^['"]|['"]$/g, '');
  if (!raw) return null;

  const candidate = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  try {
    return new URL(candidate).origin;
  } catch {
    return null;
  }
}

export function getSiteUrl(): string {
  return (
    normalizeUrl(process.env.NEXT_PUBLIC_APP_URL) ??
    normalizeUrl(process.env.BETTER_AUTH_URL) ??
    normalizeUrl(process.env.VERCEL_URL) ??
    'http://localhost:3000'
  );
}

export function getAuthUrl(): string {
  return normalizeUrl(process.env.BETTER_AUTH_URL) ?? getSiteUrl();
}
