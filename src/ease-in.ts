import { cubicBezier } from './cubic-bezier.js'

/**
 * @external https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#ease-in
 */
export const easeIn = cubicBezier([0.42, 0], [1, 1])
