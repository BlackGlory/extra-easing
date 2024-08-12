/**
 * @external https://easings.net/#easeInOutQuint
 */
export function easeInOutQuintic(normalizedTime: number): number {
  return normalizedTime < 0.5
       ? 16 * Math.pow(normalizedTime, 5)
       : 1 - Math.pow(-2 * normalizedTime + 2, 5) / 2
}
