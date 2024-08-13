import { createEaseOut } from '@utils/create-ease-out.js'
import { createEaseInOut } from '@utils/create-ease-in-out.js'
import { cubicBezier } from '@utils/cubic-bezier.js'

/**
 * @see https://easings.net/#easeInSine
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.sineease
 */
export const easeInSine = cubicBezier(0.12, 0, 0.39, 0)

/**
 * @see https://easings.net/#easeOutSine
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.sineease
 */
export const easeOutSine = createEaseOut(easeInSine)

/**
 * @see https://easings.net/#easeInOutSine
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.sineease
 */
export const easeInOutSine = createEaseInOut(easeInSine, easeOutSine)
