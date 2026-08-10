/**
 * Returns the public site origin only when it is safe to publish in metadata.
 * Development keeps its local fallback; production never emits an unverified URL.
 */
export function getPublicSiteUrl(): string | undefined {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    try {
      const url = new URL(configuredUrl);
      if (url.protocol === "https:") return url.origin;
    } catch {
      // Invalid deployment URLs must not make metadata generation fail.
    }
  }

  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : undefined;
}
