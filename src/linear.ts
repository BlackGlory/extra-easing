import { cubicBezier } from './cubic-bezier.js'

/**
 * @external https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#linear
 */
export const linear = cubicBezier([0, 0], [1, 1])
