/**
 * @external https://easings.net/#easeOutBounce
 */
export function easeOutBounce(normalizedTime: number): number {
  const n1 = 7.5625
  const d1 = 2.75

  if (normalizedTime < 1 / d1) {
    return n1 * normalizedTime * normalizedTime
  } else if (normalizedTime < 2 / d1) {
    normalizedTime -= 1.5 / d1
    return n1 * normalizedTime * normalizedTime + 0.75
  } else if (normalizedTime < 2.5 / d1) {
    normalizedTime -= 2.25 / d1
    return n1 * normalizedTime * normalizedTime + 0.9375
  } else {
    normalizedTime -= 2.625 / d1
    return n1 * normalizedTime * normalizedTime + 0.984375
  }
}
