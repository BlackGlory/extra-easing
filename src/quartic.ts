import { power } from '@utils/power.js'
import { createEaseOut } from '@utils/create-ease-out.js'
import { createEaseInOut } from '@utils/create-ease-in-out.js'

/**
 * @see https://easings.net/#easeInQuart
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quarticease
 */
export const easeInQuartic = power(4)

/**
 * @see https://easings.net/#easeInQuart
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quarticease
 */
export const easeOutQuartic = createEaseOut(easeInQuartic)

/**
 * @see https://easings.net/#easeInOutQuart
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quarticease
 */
export const easeInOutQuartic = createEaseInOut(easeInQuartic, easeOutQuartic)
