import { describe, test, expect } from 'vitest'
import { easeInSine, easeOutSine, easeInOutSine } from '@src/sine.js'

describe.each([
  ['easeInSine', easeInSine]
, ['easeOutSine', easeOutSine]
, ['easeInOutSine', easeInOutSine]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('easeInSine(0.5)', () => {
  const result = easeInSine(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutSine(0.5)', () => {
  const result = easeOutSine(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutSine(0.5)', () => {
  const result = easeInOutSine(0.5)

  expect(result).toBe(0.5)
})
