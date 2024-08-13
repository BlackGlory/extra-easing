import { createEaseOut } from '@utils/create-ease-out.js'
import { createEaseInOut } from '@utils/create-ease-in-out.js'

/**
 * @see https://easings.net/#easeInCirc
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.circleease
 */
export function easeInCircular(normalizedTime: number): number {
  return 1 - Math.sqrt(1 - normalizedTime ** 2)
}

/**
 * @see https://easings.net/#easeOutCirc
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.circleease
 */
export const easeOutCircular = createEaseOut(easeInCircular)

/**
 * @see https://easings.net/#easeInOutCirc
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.circleease
 */
export const easeInOutCircular = createEaseInOut(easeInCircular, easeOutCircular)
