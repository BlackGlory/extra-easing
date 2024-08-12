/**
 * @external https://easings.net/#easeInOutCirc
 */
export function easeInOutCirc(normalizedTime: number): number {
  return normalizedTime < 0.5
       ? (1 - Math.sqrt(1 - Math.pow(2 * normalizedTime, 2))) / 2
       : (Math.sqrt(1 - Math.pow(-2 * normalizedTime + 2, 2)) + 1) / 2
}
