/**
 * @external https://easings.net/#easeInQuart
 */
export function easeInQuart(normalizedTime: number): number {
  return normalizedTime * normalizedTime * normalizedTime * normalizedTime
}
