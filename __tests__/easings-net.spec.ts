import { describe, test, expect } from 'vitest'
import { easeInBounce, easeOutBounce, easeInOutBounce, easeInElastic, easeOutElastic, easeInOutElastic, easeInExponential, easeOutExponential, easeInOutExponential, easeInBack, easeOutBack, easeInOutBack } from '@src/easings-net.js'

describe.each([
  ['easeInExponential', easeInExponential]
, ['easeOutExponential', easeOutExponential]
, ['easeInOutExponential', easeInOutExponential]
, ['easeInBack', easeInBack]
, ['easeOutBack', easeOutBack]
, ['easeInOutBack', easeInOutBack]
, ['easeInElastic', easeInElastic]
, ['easeOutElastic', easeOutElastic]
, ['easeInOutElastic', easeInOutElastic]
, ['easeInBounce', easeInBounce]
, ['easeOutBounce', easeOutBounce]
, ['easeInOutBounce', easeInOutBounce]
])('%s', (_, fn) => {
  test.each([
    [0, 0]
  , [1, 1]
  ])('fn(%s) = %s', (normalizedTime, expected) => {
    const result = fn(normalizedTime)

    expect(result).toBe(expected)
  })
})

test('easeInExponential(0.5)', () => {
  const result = easeInExponential(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutExponential(0.5)', () => {
  const result = easeOutExponential(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutExponential(0.5)', () => {
  const result = easeInOutExponential(0.5)

  expect(result).toBe(0.5)
})

test('easeInBack(0.5)', () => {
  const result = easeInBack(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutBack(0.5)', () => {
  const result = easeOutBack(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutBack(0.5)', () => {
  const result = easeInOutBack(0.5)

  expect(result).toBe(0.5)
})

test('easeInElastic(0.5)', () => {
  const result = easeInElastic(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutElastic(0.5)', () => {
  const result = easeOutElastic(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutElastic(0.5)', () => {
  const result = easeInOutElastic(0.5)

  expect(result).toBe(0.5)
})

test('easeInBounce(0.5)', () => {
  const result = easeInBounce(0.5)

  expect(result).toBeLessThan(0.5)
})

test('easeOutBounce(0.5)', () => {
  const result = easeOutBounce(0.5)

  expect(result).toBeGreaterThan(0.5)
})

test('easeInOutBounce(0.5)', () => {
  const result = easeInOutBounce(0.5)

  expect(result).toBe(0.5)
})
