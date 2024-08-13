import { EasingFunction } from '@src/types.js'

export enum StepPosition {
  JumpStart
, JumpEnd
, JumpNone
, JumpBoth
}

/**
 * 用于放大IEEE 754浮点数, 以缓解计算中的误差.
 */
const SCALE = 100

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#steps_easing_function
 */
export function steps(steps: number, position: StepPosition): EasingFunction {
  switch (position) {
    case StepPosition.JumpStart: {
      const timePerStep = 1 / steps
      const valuePerStep = 1 / steps

      return normalizedTime => {
        const currentStep = Math.floor((normalizedTime * SCALE) / (timePerStep * SCALE))

        return currentStep === steps
             ? 1
             : valuePerStep * (currentStep + 1)
      }
    }
    case StepPosition.JumpEnd: {
      const timePerStep = 1 / steps
      const valuePerStep = 1 / steps

      return normalizedTime => {
        const currentStep = Math.floor((normalizedTime * SCALE) / (timePerStep * SCALE))

        return valuePerStep * currentStep
      }
    }
    case StepPosition.JumpNone: {
      const timePerStep = 1 / steps
      const valuePerStep = 1 / (steps - 1)

      return normalizedTime => {
        const currentStep = Math.floor((normalizedTime * SCALE) / (timePerStep * SCALE))

        return currentStep === steps
             ? 1
             : valuePerStep * currentStep
      }
    }
    case StepPosition.JumpBoth: {
      const timePerStep = 1 / steps
      const valuePerStep = 1 / (steps + 1)

      return normalizedTime => {
        const currentStep = Math.floor((normalizedTime * SCALE) / (timePerStep * SCALE))

        return valuePerStep * (currentStep + 1)
      }
    }
  }
}
