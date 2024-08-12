/**
 * @external https://easings.net/#easeOutCirc
 */
export function easeOutCirc(normalizedTime: number): number {
  return Math.sqrt(1 - Math.pow(normalizedTime - 1, 2))
}
