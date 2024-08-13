import { describe, test, expect } from 'vitest'
import { elastic } from '@utils/elastic/index.js'

describe('elastic', () => {
  test('oscillations: 3, springiness: 5', () => {
    const fn = elastic({ oscillations: 3, springiness: 5 })

    expect(fn(0)).toBe(0)
    expect(fn(0.25)).toBeLessThan(0)
    expect(fn(0.25)).toBeGreaterThan(-0.05)
    expect(fn(0.5)).toBeLessThan(0)
    expect(fn(0.5)).toBeGreaterThan(-0.1)
    expect(fn(0.7)).toBeGreaterThan(0.2)
    expect(fn(0.7)).toBeLessThan(0.25)
    expect(fn(0.85)).toBeLessThan(-0.4)
    expect(fn(0.85)).toBeGreaterThan(-0.5)
    expect(fn(1)).toBe(1)
  })
})
