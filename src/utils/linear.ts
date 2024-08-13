import { EasingFunction } from '@src/types.js'
import { first, last, lerp } from 'extra-utils'
import { assert } from '@blackglory/prelude'

type LinearPoint = [value: number, percentage: number]

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#linear_easing_function
 */
export function linear(...points: LinearPoint[]): EasingFunction {
  assert(points.length >= 2, 'The linear function requires at least two points')

  const firstPoint = first(points)
  assert(firstPoint)
  const [, firstPointPercentage] = firstPoint
  assert(firstPointPercentage === 0, 'The percentage of the first point must be 0')

  const lastPoint = last(points)
  assert(lastPoint)
  const [, lastPointPercentage] = lastPoint
  assert(lastPointPercentage, 'The percentage of the last point must be 1')

  for (let i = 1; i < points.length - 1; i++) {
    const [, currentPercentage] = points[i]
    const [, previousPercentage] = points[i - 1]

    assert(
      previousPercentage !== currentPercentage
    , 'The percentages of two adjacent points cannot be the same'
    )
    assert(
      previousPercentage < currentPercentage
    , 'The percentages of points must be sorted in ascending order'
    )
  }

  return normalizedTime => {
    let [previousPointValue, previousPointPercentage] = points[0]

    for (const [currentPointValue, currentPointPercentage] of points) {
      if (normalizedTime <= currentPointPercentage) {
        const alpha = normalizedTime === 0 // 防止除零
                    ? 0
                    : (
                        (normalizedTime - previousPointPercentage)
                      / (currentPointPercentage - previousPointPercentage)
                      )

        return lerp(alpha, [previousPointValue, currentPointValue])
      }

      previousPointValue = currentPointValue
      previousPointPercentage = currentPointPercentage
    }

    throw new Error('Impossible route')
  }
}
