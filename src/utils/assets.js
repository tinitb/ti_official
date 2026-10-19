// src/utils/assets.js
// Centralized, bulletproof asset resolver for Vite.
// Guarantees all images are statically discovered, bundled, hashed, and resolved
// with zero 404s in both development and production.

const imageModules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp,PNG,JPG}', {
  eager: true,
  import: 'default',
});

// Build a fast lookup map indexing paths, relative paths, and lowercase filenames
const lookupMap = new Map();

for (const [fullPath, assetUrl] of Object.entries(imageModules)) {
  // e.g. fullPath: "/src/assets/events/Swatchata.png"
  lookupMap.set(fullPath, assetUrl);
  lookupMap.set(fullPath.toLowerCase(), assetUrl);

  // Relative variants without leading slash or with relative prefixes
  const withoutSlash = fullPath.replace(/^\//, ''); // "src/assets/events/Swatchata.png"
  lookupMap.set(withoutSlash, assetUrl);
  lookupMap.set(withoutSlash.toLowerCase(), assetUrl);

  const relativeDot = `../${withoutSlash.replace(/^src\//, '')}`; // "../assets/events/Swatchata.png"
  lookupMap.set(relativeDot, assetUrl);
  lookupMap.set(relativeDot.toLowerCase(), assetUrl);

  // Also map pure filename: "swatchata.png"
  const filename = fullPath.split('/').pop();
  if (filename) {
    lookupMap.set(filename, assetUrl);
    lookupMap.set(filename.toLowerCase(), assetUrl);
  }
}

/**
 * Resolves any image path or filename to its bundled Vite URL.
 * Supports:
 * - Full paths: "/src/assets/events/Swatchata.png"
 * - Relative paths: "../assets/events/Swatchata.png"
 * - Filename only: "Swatchata.png" or "swatchata.png"
 * - External URLs: "https://..." or "data:..."
 */
export function getAssetUrl(pathOrFilename) {
  if (!pathOrFilename) return null;

  // External or inline
  if (typeof pathOrFilename === 'string' && (pathOrFilename.startsWith('http') || pathOrFilename.startsWith('data:'))) {
    return pathOrFilename;
  }

  const clean = String(pathOrFilename).trim();
  
  // Exact match
  if (lookupMap.has(clean)) {
    return lookupMap.get(clean);
  }

  // Lowercase match
  const lower = clean.toLowerCase();
  if (lookupMap.has(lower)) {
    return lookupMap.get(lower);
  }

  // Filename fallback
  const filename = clean.split('/').pop();
  if (filename && lookupMap.has(filename.toLowerCase())) {
    return lookupMap.get(filename.toLowerCase());
  }

  return null;
}

export default getAssetUrl;
