import { describe, test, expect } from 'vitest'
import { exponential } from '@utils/exponential.js'

describe('exponential', () => {
  test('exponent = -3', () => {
    const fn = exponential(-3)

    expect(fn(0)).toBeCloseTo(0)
    expect(fn(0.2)).toBeGreaterThan(0.4)
    expect(fn(0.2)).toBeLessThan(0.5)
    expect(fn(0.4)).toBeGreaterThan(0.7)
    expect(fn(0.4)).toBeLessThan(0.8)
    expect(fn(0.6)).toBeGreaterThan(0.8)
    expect(fn(0.6)).toBeLessThan(0.9)
    expect(fn(0.8)).toBeGreaterThan(0.9)
    expect(fn(0.8)).toBeLessThan(1)
    expect(fn(1)).toBe(1)
  })

  test('exponent = 2', () => {
    const fn = exponential(2)

    expect(fn(0)).toBeCloseTo(0)
    expect(fn(0.2)).toBeGreaterThan(0)
    expect(fn(0.2)).toBeLessThan(0.1)
    expect(fn(0.4)).toBeGreaterThan(0.1)
    expect(fn(0.4)).toBeLessThan(0.2)
    expect(fn(0.6)).toBeGreaterThan(0.3)
    expect(fn(0.6)).toBeLessThan(0.4)
    expect(fn(0.8)).toBeGreaterThan(0.6)
    expect(fn(0.8)).toBeLessThan(0.7)
    expect(fn(1)).toBe(1)
  })

  test('exponent = 10', () => {
    const fn = exponential(10)

    expect(fn(0)).toBeCloseTo(0)
    expect(fn(0.2)).toBeGreaterThan(0)
    expect(fn(0.2)).toBeLessThan(0.1)
    expect(fn(0.4)).toBeGreaterThan(0)
    expect(fn(0.4)).toBeLessThan(0.1)
    expect(fn(0.6)).toBeGreaterThan(0)
    expect(fn(0.6)).toBeLessThan(0.1)
    expect(fn(0.8)).toBeGreaterThan(0.1)
    expect(fn(0.8)).toBeLessThan(0.2)
    expect(fn(1)).toBe(1)
  })
})
