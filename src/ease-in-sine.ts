/**
 * @external https://easings.net/#easeInSine
 */
export function easeInSine(normalizedTime: number): number {
  return 1 - Math.cos((normalizedTime * Math.PI) / 2)
}
