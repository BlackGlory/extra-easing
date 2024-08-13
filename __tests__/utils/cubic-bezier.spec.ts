import { describe, test, expect } from 'vitest'
import { cubicBezier } from '@utils/cubic-bezier.js'

describe('cubicBezier', () => {
  test('([0, 0], [1, 1])', () => {
    const fn = cubicBezier([0, 0], [1, 1])

    expect(fn(0)).toBe(0)
    expect(fn(0.25)).toBe(0.25)
    expect(fn(0.5)).toBe(0.5)
    expect(fn(0.75)).toBe(0.75)
    expect(fn(1)).toBe(1)
  })

  test('([0.1, 0.6], [0.7, 0.2])', () => {
    const fn = cubicBezier([0.1, 0.6], [0.7, 0.2])

    expect(fn(0)).toBe(0)
    expect(fn(0.25)).toBeGreaterThan(0.25)
    expect(fn(0.25)).toBeLessThan(0.5)
    expect(fn(0.5)).toBeLessThan(0.5)
    expect(fn(0.75)).toBeGreaterThan(0.5)
    expect(fn(0.75)).toBeLessThan(0.75)
    expect(fn(1)).toBe(1)
  })

  test('([0.3, 0.2], [0.2, 1.4])', () => {
    const fn = cubicBezier([0.3, 0.2], [0.2, 1.4])

    expect(fn(0)).toBe(0)
    expect(fn(0.25)).toBeCloseTo(0.5, 1)
    expect(fn(0.5)).toBeCloseTo(1, 1)
    expect(fn(0.75)).toBeGreaterThan(1)
    expect(fn(1)).toBe(1)
  })
})
