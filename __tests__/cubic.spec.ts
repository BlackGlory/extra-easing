import { describe, test, expect } from 'vitest'
import { easeInCubic, easeOutCubic, easeInOutCubic } from '@src/cubic.js'

describe.each([
  ['easeInCubic', easeInCubic]
, ['easeOutCubic', easeOutCubic]
, ['easeInOutCubic', easeInOutCubic]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('easeInCubic(0.5)', () => {
  const result = easeInCubic(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutCubic(0.5)', () => {
  const result = easeOutCubic(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutCubic(0.5)', () => {
  const result = easeInOutCubic(0.5)

  expect(result).toBe(0.5)
})
