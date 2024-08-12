/**
 * @external https://easings.net/#easeInCirc
 */
export function easeInCirc(normalizedTime: number): number {
  return 1 - Math.sqrt(1 - Math.pow(normalizedTime, 2))
}
