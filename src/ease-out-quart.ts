/**
 * @external https://easings.net/#easeOutQuart
 */
export function easeOutQuart(normalizedTime: number): number {
  return 1 - Math.pow(1 - normalizedTime, 4)
}
