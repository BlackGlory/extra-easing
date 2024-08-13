import { test, expect } from 'vitest'
import { createEaseIn } from '@utils/create-ease-in.js'

test('createEaseIn', () => {
  const easeOut = (x: number) => x ** 2

  const easeIn = createEaseIn(easeOut)

  expect(easeIn(0)).toBe(1 - easeOut(1 - 0))
  expect(easeIn(0.25)).toBe(1 - easeOut(1 - 0.25))
  expect(easeIn(0.5)).toBe(1 - easeOut(1 - 0.5))
  expect(easeIn(0.75)).toBe(1 - easeOut(1 - 0.75))
  expect(easeIn(1)).toBe(1 - easeOut(1 - 1))
})
