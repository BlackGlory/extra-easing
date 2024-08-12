/**
 * @external https://easings.net/#easeInOutQuad
 */
export function easeInOutQuad(normalizedTime: number): number {
  return normalizedTime < 0.5
       ? 2 * normalizedTime * normalizedTime
       : 1 - Math.pow(-2 * normalizedTime + 2, 2) / 2
}
