import { assert } from '@blackglory/prelude'
import { EasingFunction } from '@src/types.js'

/**
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.powerease
 */
export function power(power: number): EasingFunction {
  assert(power >= 0, 'The power must be greater than or equal to 0')

  return normalizedTime => normalizedTime ** power
}
