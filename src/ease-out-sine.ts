/**
 * @external https://easings.net/#easeOutSine
 */
export function easeOutSine(normalizedTime: number): number {
  return Math.sin((normalizedTime * Math.PI) / 2)
}
