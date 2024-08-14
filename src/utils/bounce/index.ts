// The code is a derivative work of Babylon.js:
// https://github.com/BabylonJS/Babylon.js/blob/1e2bc74ead52b91030a6abd9695e5a5f175b0758/packages/dev/core/src/Animations/easing.ts#L154-L173

import { assert } from '@blackglory/prelude'
import { EasingFunction } from '@src/types.js'

/**
 * @param bounces The number of bounces. The value must be greater than or equal to zero. Negative values resolve to zero. The default is 3.
 * @param bounciness a value that specifies how bouncy the bounce animation is. Low values of this property result in bounces with little lose of height between bounces (more bouncy) while high values result in dampened bounces (less bouncy).
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.bounceease
 * @see https://www.desmos.com/calculator/1lqmrs2ps9
 */
export function bounce({ bounces = 3, bounciness = 2 }: {
  bounces?: number
  bounciness?: number
} = {}): EasingFunction {
  assert(bounciness > 1, 'The parameter bounciness must be greater than 1')

  const c = (1 - bounciness ** bounces)
          / (1 - bounciness)
          + bounciness ** bounces / 2

  return normalizedTime => {
    const d = Math.floor(
      Math.log(-(normalizedTime * c) * (1 - bounciness) + 1)
    / Math.log(bounciness)
    )
    const f = (1 - bounciness ** d)
            / ((1 - bounciness) * c)
    const g = (
                f
              + (1 - bounciness ** (d + 1))
              / ((1 - bounciness) * c)
              )
            / 2

    return (
             -((1 / bounciness) ** (bounces - d))
           / (g - f) ** 2
           )
         * (normalizedTime - g * 2 + f)
         * (normalizedTime - f)
  }
}
