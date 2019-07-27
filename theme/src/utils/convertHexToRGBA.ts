/**
 * Get RGBA from HEX
 *
 * @param {string} hex - 3 or 6 based HEX color
 * @param {number} opacity - 0 to 1 opacity level
 * @return {string} rgba( R, G, B, opacity )
 */

export function convertHexToRGBA(hex: string, opacity: number) {
  if (!hex || !opacity) {
    return
  }
  hex = hex.replace("#", "")
  if (hex.length === 3) {
    hex = hex + hex
  }
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = "rgba(" + r + "," + g + "," + b + "," + opacity + ")"
  return result
}
