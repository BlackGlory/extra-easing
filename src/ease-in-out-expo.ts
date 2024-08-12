/**
 * @external https://easings.net/#easeInOutExpo
 */
export function easeInOutExpo(normalizedTime: number): number {
  if (normalizedTime === 0) return 0
  else if (normalizedTime === 1) return 1
  else if (normalizedTime < 0.5) return Math.pow(2, 20 * normalizedTime - 10) / 2
  else return (2 - Math.pow(2, -20 * normalizedTime + 10)) / 2
}
