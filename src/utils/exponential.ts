import { EasingFunction } from '@src/types.js'

/**
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.exponentialease
 */
export function exponential(exponent: number): EasingFunction {
  // exponent为0时会出现除零.
  if (exponent === 0) return x => x

  return normalizedTime => {
    return Math.expm1(exponent * normalizedTime)
         / Math.expm1(exponent)
  }
}
