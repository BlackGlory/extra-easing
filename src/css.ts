import { cubicBezier } from '@utils/cubic-bezier.js'

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#ease
 */
export const ease = cubicBezier([0.25, 0.1], [0.25, 1])

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#ease-in
 */
export const easeIn = cubicBezier([0.42, 0], [1, 1])

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#ease-out
 */
export const easeOut = cubicBezier([0, 0], [0.58, 1])

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#ease-in-out
 */
export const easeInOut = cubicBezier([0.42, 0], [0.58, 1])
