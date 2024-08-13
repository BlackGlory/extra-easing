import { describe, test, expect } from 'vitest'
import { easeInQuintic, easeOutQuintic, easeInOutQuintic } from '@src/quintic.js'

describe.each([
  ['easeInQuintic', easeInQuintic]
, ['easeOutQuintic', easeOutQuintic]
, ['easeInOutQuintic', easeInOutQuintic]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('easeInQuintic(0.5)', () => {
  const result = easeInQuintic(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutQuintic(0.5)', () => {
  const result = easeOutQuintic(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutQuintic(0.5)', () => {
  const result = easeInOutQuintic(0.5)

  expect(result).toBe(0.5)
})
