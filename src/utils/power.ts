import { EasingFunction } from '@src/types.js'

/**
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.powerease
 */
export function power(power: number): EasingFunction {
  return normalizedTime => normalizedTime ** power
}
