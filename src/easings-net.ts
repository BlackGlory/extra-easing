import { createEaseIn } from '@utils/create-ease-in.js'
import { createEaseOut } from '@utils/create-ease-out.js'
import { createEaseInOut } from '@utils/create-ease-in-out.js'
import { cubicBezier } from '@utils/cubic-bezier.js'

/**
 * @see https://easings.net/#easeInExpo
 */
export const easeInExponential = cubicBezier(0.7, 0, 0.84, 0)

/**
 * @see https://easings.net/#easeOutExpo
 */
export const easeOutExponential = createEaseOut(easeInExponential)

/**
 * @see https://easings.net/#easeInOutExpo
 */
export const easeInOutExponential = createEaseInOut(easeInExponential, easeOutExponential)

/**
 * @see https://easings.net/#easeInBack
 */
export const easeInBack = cubicBezier(0.36, 0, 0.66, -0.56)

/**
 * @see https://easings.net/#easeOutBack
 */
export const easeOutBack = createEaseOut(easeInBack)

/**
 * @see https://easings.net/#easeInOutBack
 */
export const easeInOutBack = createEaseInOut(easeInBack, easeOutBack)

/**
 * @see https://easings.net/#easeInElastic
 */
export function easeInElastic(normalizedTime: number): number {
  const c4 = (2 * Math.PI) / 3

  if (normalizedTime === 0) {
    return 0
  } else if (normalizedTime === 1) {
    return 1
  } else {
    return -(2 ** (10 * normalizedTime - 10))
         * Math.sin((normalizedTime * 10 - 10.75) * c4)
  }
}

/**
 * @see https://easings.net/#easeOutElastic
 */
export const easeOutElastic = createEaseOut(easeInElastic)

/**
 * @see https://easings.net/#easeInOutElastic
 */
export const easeInOutElastic = createEaseInOut(
  easeInElastic
, easeOutElastic
)

/**
 * @see https://easings.net/#easeInBounce
 */
export const easeInBounce = createEaseIn(easeOutBounce)

/**
 * @see https://easings.net/#easeOutBounce
 */
export function easeOutBounce(normalizedTime: number): number {
  const n1 = 7.5625
  const d1 = 2.75

  if (normalizedTime < 1 / d1) {
    return n1 * normalizedTime * normalizedTime
  } else if (normalizedTime < 2 / d1) {
    normalizedTime -= 1.5 / d1
    return n1 * normalizedTime ** 2 + 0.75
  } else if (normalizedTime < 2.5 / d1) {
    normalizedTime -= 2.25 / d1
    return n1 * normalizedTime ** 2+ 0.9375
  } else {
    normalizedTime -= 2.625 / d1
    return n1 * normalizedTime ** 2 + 0.984375
  }
}

/**
 * @see https://easings.net/#easeInOutBounce
 */
export const easeInOutBounce = createEaseInOut(
  easeInBounce
, easeOutBounce
)
