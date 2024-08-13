import { EasingFunction } from '@src/types.js'

export function createEaseOut(easeIn: EasingFunction): EasingFunction {
  return normalizedTime => 1 - easeIn(1 - normalizedTime)
}
