import { describe, test, expect } from 'vitest'
import { linear } from '@utils/linear.js'

describe('linear', () => {
  test('([0, 0], [1, 1])', () => {
    const fn = linear([0, 0], [1, 1])

    expect(fn(0)).toBe(0)
    expect(fn(0.25)).toBe(0.25)
    expect(fn(0.5)).toBe(0.5)
    expect(fn(0.75)).toBe(0.75)
    expect(fn(1)).toBe(1)
  })

  test('([0, 0], [0.25, 0.5], [1, 1])', () => {
    const fn = linear([0, 0], [0.25, 0.5], [1, 1])

    expect(fn(0)).toBe(0)
    expect(fn(0.25)).toBe(0.125)
    expect(fn(0.5)).toBe(0.25)
    expect(fn(0.75)).toBe(0.625)
    expect(fn(1)).toBe(1)
  })

  test('([0, 0], [0.25, 0.75], [1, 1])', () => {
    const fn = linear([0, 0], [0.25, 0.75], [1, 1])

    expect(fn(0)).toBe(0)
    expect(fn(0.25)).toBe(0.25 / 0.75 * 0.25)
    expect(fn(0.5)).toBe(0.5 / 0.75 * 0.25)
    expect(fn(0.75)).toBe(0.25)
    expect(fn(1)).toBe(1)
  })
})
