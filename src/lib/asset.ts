// Prepends Vite's BASE_URL to asset paths so they resolve correctly
// when the app is hosted under a subdirectory (e.g. GitHub Pages /jasmine/).
export function assetUrl(url: string): string {
  if (!url) return url;
  // Leave fully-qualified URLs alone.
  if (/^(https?:)?\/\//i.test(url) || url.startsWith("data:") || url.startsWith("blob:")) {
    return url;
  }
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : base + "/";
  const path = url.startsWith("/") ? url.slice(1) : url;
  return normalizedBase + path;
}
