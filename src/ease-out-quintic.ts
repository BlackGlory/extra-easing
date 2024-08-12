import { easeInQuintic } from './ease-in-quintic.js'

/**
 * @external https://easings.net/#easeOutQuint
 */
export function easeOutQuintic(normalizedTime: number): number {
  return 1 - easeInQuintic(1 - normalizedTime)
}
