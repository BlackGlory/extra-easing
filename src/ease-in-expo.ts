/**
 * @external https://easings.net/#easeInExpo
 */
export function easeInExpo(normalizedTime: number): number {
  return normalizedTime === 0
       ? 0
       : Math.pow(2, 10 * normalizedTime - 10)
}
