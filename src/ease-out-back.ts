/**
 * @external https://easings.net/#easeOutBack
 */
export function easeOutBack(normalizedTime: number): number {
  const c1 = 1.70158
  const c3 = c1 + 1

  return 1 + c3 * Math.pow(normalizedTime - 1, 3) + c1 * Math.pow(normalizedTime - 1, 2)
}
