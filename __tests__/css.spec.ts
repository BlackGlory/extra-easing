import { describe, test, expect } from 'vitest'
import { ease, easeIn, easeOut, easeInOut } from '@src/css.js'

describe.each([
  ['ease', ease]
, ['easeIn', easeIn]
, ['easeOut', easeOut]
, ['easeInOut', easeInOut]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('ease(0.5)', () => {
  const result = ease(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeIn(0.5)', () => {
  const result = easeIn(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOut(0.5)', () => {
  const result = easeOut(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOut(0.5)', () => {
  const result = easeInOut(0.5)

  expect(result).toBe(0.5)
})
