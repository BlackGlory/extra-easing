import { describe, test, expect } from 'vitest'
import { easeInQuartic, easeOutQuartic, easeInOutQuartic } from '@src/quartic.js'

describe.each([
  ['easeInQuartic', easeInQuartic]
, ['easeOutQuartic', easeOutQuartic]
, ['easeInOutQuartic', easeInOutQuartic]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('easeInQuartic(0.5)', () => {
  const result = easeInQuartic(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutQuartic(0.5)', () => {
  const result = easeOutQuartic(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutQuartic(0.5)', () => {
  const result = easeInOutQuartic(0.5)

  expect(result).toBe(0.5)
})
