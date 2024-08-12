/**
 * @external https://easings.net/#easeOutCubic
 */
export function easeOutCubic(normalizedTime: number): number {
  return 1 - Math.pow(1 - normalizedTime, 3)
}
