import { test, expect } from 'vitest'
import { power } from '@utils/power.js'

test('power', () => {
  const fn = power(2)

  expect(fn(0)).toBe(0)
  expect(fn(0.5)).toBe(0.5 ** 2)
  expect(fn(1)).toBe(1)
})
