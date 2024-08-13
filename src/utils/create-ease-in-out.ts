import { EasingFunction } from '@src/types.js'

export function createEaseInOut(
  easeIn: EasingFunction
, easeOut: EasingFunction
): EasingFunction {
  return normalizedTime => {
    if (normalizedTime < 0.5) {
      return easeIn(normalizedTime * 2) / 2
    } else {
      return 0.5 + easeOut((normalizedTime - 0.5) * 2) / 2
    }
  }
}
