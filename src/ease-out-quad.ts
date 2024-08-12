/**
 * @external https://easings.net/#easeOutQuad
 */
export function easeOutQuad(normalizedTime: number): number {
  return 1 - (1 - normalizedTime) * (1 - normalizedTime)
}
