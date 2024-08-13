import { describe, test, expect } from 'vitest'
import { easeInCircular, easeOutCircular, easeInOutCircular } from '@src/circular.js'

describe.each([
  ['easeInCircular', easeInCircular]
, ['easeOutCircular', easeOutCircular]
, ['easeInOutCircular', easeInOutCircular]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('easeInCircular(0.5)', () => {
  const result = easeInCircular(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutCircular(0.5)', () => {
  const result = easeOutCircular(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutCircular(0.5)', () => {
  const result = easeInOutCircular(0.5)

  expect(result).toBe(0.5)
})
