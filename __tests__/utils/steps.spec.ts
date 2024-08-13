import { describe, test, expect } from 'vitest'
import { steps, StepPosition } from '@utils/steps.js'

describe('steps', () => {
  test('(1, JumpStart)', () => {
    const fn = steps(1, StepPosition.JumpStart)

    expect(fn(0)).toBe(1)
    expect(fn(0.5)).toBe(1)
    expect(fn(1)).toBe(1)
  })

  test('(1, JumpEnd)', () => {
    const fn = steps(1, StepPosition.JumpEnd)

    expect(fn(0)).toBe(0)
    expect(fn(0.5)).toBe(0)
    expect(fn(1)).toBe(1)
  })

  test('(2, JumpStart)', () => {
    const fn = steps(2, StepPosition.JumpStart)

    expect(fn(0)).toBe(0.5)
    expect(fn(0.25)).toBe(0.5)
    expect(fn(0.5)).toBe(1)
    expect(fn(0.75)).toBe(1)
    expect(fn(1)).toBe(1)
  })

  test('(4, JumpEnd)', () => {
    const fn = steps(4, StepPosition.JumpEnd)

    expect(fn(0)).toBe(0)
    expect(fn(0.2)).toBe(0)
    expect(fn(0.25)).toBe(0.25)
    expect(fn(0.4)).toBe(0.25)
    expect(fn(0.5)).toBe(0.5)
    expect(fn(0.6)).toBe(0.5)
    expect(fn(0.75)).toBe(0.75)
    expect(fn(0.8)).toBe(0.75)
    expect(fn(1)).toBe(1)
  })

  test('(5, JumpNone)', () => {
    const fn = steps(5, StepPosition.JumpNone)

    expect(fn(0)).toBe(0)
    expect(fn(0.2)).toBe(0.25)
    expect(fn(0.25)).toBe(0.25)
    expect(fn(0.4)).toBe(0.5)
    expect(fn(0.5)).toBe(0.5)
    expect(fn(0.6)).toBe(0.75)
    expect(fn(0.75)).toBe(0.75)
    expect(fn(0.8)).toBe(1)
    expect(fn(1)).toBe(1)
  })

  test('(3, JumpBoth)', () => {
    const fn = steps(3, StepPosition.JumpBoth)

    expect(fn(0)).toBe(0.25)
    expect(fn(0.25)).toBe(0.25)
    expect(fn(1 / 3)).toBe(0.5)
    expect(fn(0.5)).toBe(0.5)
    expect(fn(2 / 3)).toBe(0.75)
    expect(fn(0.75)).toBe(0.75)
    expect(fn(1)).toBe(1)
  })
})
