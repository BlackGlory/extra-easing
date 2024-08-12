/**
 * @external https://easings.net/#easeInOutQuart
 */
export function easeInOutQuart(normalizedTime: number): number {
  return normalizedTime < 0.5
       ? 8 * normalizedTime * normalizedTime * normalizedTime * normalizedTime
       : 1 - Math.pow(-2 * normalizedTime + 2, 4) / 2
}
