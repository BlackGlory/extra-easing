import { EasingFunction } from '@src/types.js'

export function createEaseIn(easeOut: EasingFunction): EasingFunction {
  return normalizedTime => 1 - easeOut(1 - normalizedTime)
}
