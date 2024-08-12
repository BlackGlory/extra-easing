import { cubicBezier } from './cubic-bezier.js'

/**
 * @external https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#ease-in-out
 */
export const easeInOut = cubicBezier([0.42, 0], [0.58, 1])
