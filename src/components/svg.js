/**
 * Fetches an SVG file and returns it as a text.
 * @param {string} url - The URL of the SVG file.
 * @returns {Promise<string>} The SVG content as a text.
 */
export async function fetchSVG(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch SVG: ${response.statusText}`);
  }
  return await response.text();
}
