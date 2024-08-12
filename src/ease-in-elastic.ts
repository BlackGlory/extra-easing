/**
 * @external https://easings.net/#easeInElastic
 */
export function easeInElastic(normalizedTime: number): number {
  const c4 = (2 * Math.PI) / 3

  if (normalizedTime === 0) return 0
  else if (normalizedTime === 1) return 1
  else return -Math.pow(2, 10 * normalizedTime - 10) * Math.sin((normalizedTime * 10 - 10.75) * c4)
}
