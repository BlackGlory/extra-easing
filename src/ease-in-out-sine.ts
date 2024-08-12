/**
 * @external https://easings.net/#easeInOutSine
 */
export function easeInOutSine(normalizedTime: number): number {
  return -(Math.cos(Math.PI * normalizedTime) - 1) / 2
}
