/**
 * @external https://easings.net/#easeInBack
 */
export function easeInBack(normalizedTime: number): number {
  const c1 = 1.70158
  const c3 = c1 + 1

  return c3 * normalizedTime * normalizedTime * normalizedTime - c1 * normalizedTime * normalizedTime
}
