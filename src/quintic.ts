import { power } from '@utils/power.js'
import { createEaseOut } from '@utils/create-ease-out.js'
import { createEaseInOut } from '@utils/create-ease-in-out.js'

/**
 * @see https://easings.net/#easeInQuint
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quinticease
 */
export const easeInQuintic = power(5)

/**
 * @see https://easings.net/#easeOutQuint
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quinticease
 */
export const easeOutQuintic = createEaseOut(easeInQuintic)

/**
 * @see https://easings.net/#easeOutQuint
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quinticease
 */
export const easeInOutQuintic = createEaseInOut(easeInQuintic, easeOutQuintic)
