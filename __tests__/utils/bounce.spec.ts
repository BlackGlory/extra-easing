import { describe, test, expect } from 'vitest'
import { bounce } from '@utils/bounce/index.js'

describe('bounce', () => {
  test('bounces: 3, bounciness: 2', () => {
    const fn = bounce({ bounces: 3, bounciness: 2 })

    expect(fn(0)).toBe(0)
    expect(fn(0.2)).toBeGreaterThan(0.2)
    expect(fn(0.2)).toBeLessThan(0.3)
    expect(fn(0.4)).toBeGreaterThan(0.4)
    expect(fn(0.4)).toBeLessThan(0.5)
    expect(fn(0.6)).toBeGreaterThan(0.1)
    expect(fn(0.6)).toBeLessThan(0.2)
    expect(fn(0.8)).toBeGreaterThan(0.6)
    expect(fn(0.8)).toBeLessThan(0.8)
    expect(fn(1)).toBe(1)
  })
})
