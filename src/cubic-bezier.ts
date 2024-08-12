import _cubicBezier from 'bezier-easing'

export function cubicBezier(
  x1: number, y1: number
, x2: number, y2: number
): (normalizedTime: number) => number
export function cubicBezier(
  p1: [x: number, y: number]
, p2: [x: number, y: number]
): (normalizedTime: number) => number
export function cubicBezier(...args:
| [
    x1: number, y1: number
  , x2: number, y2: number
  ]
| [
    p1: [x: number, y: number]
  , p2: [x: number, y: number]
  ]
): (normalizedTime: number) => number {
  if (args.length === 2) {
    const [p1, p2] = args
    return _cubicBezier(...p1, ...p2)
  } else {
    const [x1, y1, x2, y2] = args
    return _cubicBezier(x1, y1, x2, y2)
  }
}
