/** Dominio oficial del portafolio. */
export const OFFICIAL_SITE_URL = "https://jaimejair.dev";

/**
 * Returns the public site origin only when it is safe to publish in metadata.
 * NEXT_PUBLIC_SITE_URL wins when it is set; otherwise production uses the
 * official domain and development uses localhost.
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
    : OFFICIAL_SITE_URL;
}
