/**
 * @external https://easings.net/#easeInOutElastic
 */
export function easeInOutElastic(normalizedTime: number): number {
  const c5 = (2 * Math.PI) / 4.5

  if (normalizedTime === 0) return 0
  else if (normalizedTime === 1) return 1
  else if (normalizedTime < 0.5) return -(Math.pow(2, 20 * normalizedTime - 10) * Math.sin((20 * normalizedTime - 11.125) * c5)) / 2
  else return (Math.pow(2, -20 * normalizedTime + 10) * Math.sin((20 * normalizedTime - 11.125) * c5)) / 2 + 1
}
