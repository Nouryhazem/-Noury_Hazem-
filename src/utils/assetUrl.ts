/**
 * Resolves local asset paths to work reliably with Vite's base path
 * (e.g. '/-Noury_Hazem-/' on GitHub Pages deployment and '/' in development).
 */
export function getAssetUrl(path: string | undefined | null): string {
  if (!path) return '';
  
  // External or embedded URLs
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  // Normalize legacy /src/assets/ path to /assets/
  let clean = path;
  if (clean.startsWith('/src/assets/')) {
    clean = clean.replace('/src/assets/', '/assets/');
  }

  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  // Idempotency: avoid double-prefixing if path already includes the base
  if (clean.startsWith(normalizedBase)) {
    return clean;
  }

  const relativePath = clean.startsWith('/') ? clean.slice(1) : clean;
  return `${normalizedBase}${relativePath}`;
}
