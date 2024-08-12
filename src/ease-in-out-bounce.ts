import { easeOutBounce } from './ease-out-bounce.js'

/**
 * @external https://easings.net/#easeInOutBounce
 */
export function easeInOutBounce(normalizedTime: number): number {
  return normalizedTime < 0.5
       ? (1 - easeOutBounce(1 - 2 * normalizedTime)) / 2
       : (1 + easeOutBounce(2 * normalizedTime - 1)) / 2
}
