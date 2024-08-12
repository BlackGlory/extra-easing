import { easeOutBounce } from './ease-out-bounce.js'

/**
 * @external https://easings.net/#easeInBounce
 */
export function easeInBounce(normalizedTime: number): number {
  return 1 - easeOutBounce(1 - normalizedTime)
}
