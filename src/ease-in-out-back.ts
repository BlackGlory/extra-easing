/**
 * @external https://easings.net/#easeInOutBack
 */
export function easeInOutBack(normalizedTime: number): number {
  const c1 = 1.70158
  const c2 = c1 * 1.525

  return normalizedTime < 0.5
       ? (Math.pow(2 * normalizedTime, 2) * ((c2 + 1) * 2 * normalizedTime - c2)) / 2
       : (Math.pow(2 * normalizedTime - 2, 2) * ((c2 + 1) * (normalizedTime * 2 - 2) + c2) + 2) / 2
}
