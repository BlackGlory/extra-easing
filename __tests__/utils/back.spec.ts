import { describe, test, expect } from 'vitest'
import { back } from '@utils/back.js'

describe('back', () => {
  test('amplitude = 0.5', () => {
    const fn = back(0.5)

    expect(fn(0)).toBe(0)
    expect(fn(0.5)).toBeLessThan(0)
    expect(fn(0.5)).toBeGreaterThan(-0.25)
    expect(fn(1)).toBe(1)
  })

  test('amplitude = 1', () => {
    const fn = back(1)

    expect(fn(0)).toBe(0)
    expect(fn(0.5)).toBeLessThan(-0.25)
    expect(fn(0.5)).toBeGreaterThan(-0.5)
    expect(fn(1)).toBe(1)
  })
})
