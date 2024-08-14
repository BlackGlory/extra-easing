// The code is a derivative work of Babylon.js:
// https://github.com/BabylonJS/Babylon.js/blob/1e2bc74ead52b91030a6abd9695e5a5f175b0758/packages/dev/core/src/Animations/easing.ts#L214-L225

import { EasingFunction } from '@src/types.js'
import { exponential } from '@utils/exponential.js'

/**
 * @param oscillations The number of times the target slides back and forth over the animation destination.
 * @param springiness
 * The stiffness of the spring.
 * The smaller the springiness value is, the stiffer the spring and the faster the elasticity decreases in intensity over each oscillation.
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.elasticease
 * @see https://www.desmos.com/calculator/fiy9wgvaxt
 */
export function elastic({ oscillations = 3, springiness = 3 }: {
  oscillations?: number
  springiness?: number
} = {}): EasingFunction {
  const getAmplitude: EasingFunction = springiness === 0
                                     ? normalizedTime => normalizedTime
                                     : exponential(springiness)

  return normalizedTime => {
    return getAmplitude(normalizedTime)
         * Math.sin((Math.PI * 2 * oscillations + Math.PI / 2) * normalizedTime)
  }
}
