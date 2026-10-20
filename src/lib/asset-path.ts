/**
 * Helper to ensure local asset URLs correctly prepend the subpath basePath
 * when hosted on GitHub Pages (e.g. /Wedding-invitation-/images/hero.jpg)
 * while remaining clean root-relative (/images/hero.jpg) on custom domains and localhost.
 */
export function getAssetPath(src: string): string {
  if (!src) return "";
  // Do not modify external or data URLs
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${normalized}`;
}
