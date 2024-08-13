import { describe, test, expect } from 'vitest'
import { easeInQuadratic, easeOutQuadratic, easeInOutQuadratic } from '@src/quadratic.js'

describe.each([
  ['easeInQuadratic', easeInQuadratic]
, ['easeOutQuadratic', easeOutQuadratic]
, ['easeInOutQuadratic', easeInOutQuadratic]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('easeInQuadratic(0.5)', () => {
  const result = easeInQuadratic(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutQuadratic(0.5)', () => {
  const result = easeOutQuadratic(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutQuadratic(0.5)', () => {
  const result = easeInOutQuadratic(0.5)

  expect(result).toBe(0.5)
})
