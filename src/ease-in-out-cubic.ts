/**
 * @external https://easings.net/#easeInOutCubic
 */
export function easeInOutCubic(normalizedTime: number): number {
  return normalizedTime < 0.5
       ? 4 * normalizedTime * normalizedTime * normalizedTime
       : 1 - Math.pow(-2 * normalizedTime + 2, 3) / 2
}
