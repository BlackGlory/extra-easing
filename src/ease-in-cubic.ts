/**
 * @external https://easings.net/#easeInCubic
 */
export function easeInCubic(normalizedTime: number): number {
  return normalizedTime * normalizedTime * normalizedTime
}
