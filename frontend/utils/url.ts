const BASE_URL = process.env.NEXT_API_URL || "";

// Utility function to construct full media URL
export function getMediaUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${BASE_URL}${path}`;
}