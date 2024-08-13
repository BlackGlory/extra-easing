import { EasingFunction } from '@src/types.js'

/**
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.exponentialease
 */
export function exponential(exponent: number): EasingFunction {
  return normalizedTime => {
    return Math.expm1(exponent * normalizedTime)
         / Math.expm1(exponent)
  }
}
