import { describe, test, expect } from 'vitest'
import { getError } from 'return-style'
import { power } from '@utils/power.js'

describe('power', () => {
  test('power > 0', () => {
    const fn = power(2)

    expect(fn(0)).toBe(0)
    expect(fn(0.5)).toBe(0.5 ** 2)
    expect(fn(1)).toBe(1)
  })

  test('power = 0', () => {
    const fn = power(0)

    expect(fn(0)).toBe(1)
    expect(fn(0.5)).toBe(1)
    expect(fn(1)).toBe(1)
  })

  test('power < 0', () => {
    const error = getError(() => power(-1))

    expect(error).toBeInstanceOf(Error)
  })
})
