import { EasingFunction } from '@src/types.js'
import _cubicBezier from 'bezier-easing'

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#cubic_b%C3%A9zier_easing_function
 */
export function cubicBezier(
  x1: number, y1: number
, x2: number, y2: number
): EasingFunction
export function cubicBezier(
  p1: [x: number, y: number]
, p2: [x: number, y: number]
): EasingFunction
export function cubicBezier(...args:
| [
    x1: number, y1: number
  , x2: number, y2: number
  ]
| [
    p1: [x: number, y: number]
  , p2: [x: number, y: number]
  ]
): EasingFunction {
  if (args.length === 2) {
    const [p1, p2] = args
    return _cubicBezier(...p1, ...p2)
  } else {
    const [x1, y1, x2, y2] = args
    return _cubicBezier(x1, y1, x2, y2)
  }
}
