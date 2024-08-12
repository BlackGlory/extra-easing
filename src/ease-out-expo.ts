/**
 * @external https://easings.net/#easeOutExpo
 */
export function easeOutExpo(normalizedTime: number): number {
  return normalizedTime === 1
       ? 1
       : 1 - Math.pow(2, -10 * normalizedTime)
}
