import { power } from '@utils/power.js'
import { createEaseOut } from '@utils/create-ease-out.js'
import { createEaseInOut } from '@utils/create-ease-in-out.js'

/**
 * @see https://easings.net/#easeInCubic
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.cubicease
 */
export const easeInCubic = power(3)

/**
 * @see https://easings.net/#easeOutCubic
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.cubicease
 */
export const easeOutCubic = createEaseOut(easeInCubic)

/**
 * @see https://easings.net/#easeInOutCubic
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.cubicease
 */
export const easeInOutCubic = createEaseInOut(easeInCubic, easeOutCubic)
