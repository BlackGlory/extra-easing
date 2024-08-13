import { power } from '@utils/power.js'
import { createEaseOut } from '@utils/create-ease-out.js'
import { createEaseInOut } from '@utils/create-ease-in-out.js'

/**
 * @see https://easings.net/#easeInQuad
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quadraticease
 */
export const easeInQuadratic = power(2)

/**
 * @see https://easings.net/#easeOutQuad
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quadraticease
 */
export const easeOutQuadratic = createEaseOut(easeInQuadratic)

/**
 * @see https://easings.net/#easeInOutQuad
 * @see https://learn.microsoft.com/en-us/dotnet/api/system.windows.media.animation.quadraticease
 */
export const easeInOutQuadratic = createEaseInOut(easeInQuadratic, easeOutQuadratic)
