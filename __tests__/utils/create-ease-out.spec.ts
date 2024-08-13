import { test, expect } from 'vitest'
import { createEaseOut } from '@utils/create-ease-out.js'

test('createEaseOut', () => {
  const easeIn = (x: number) => x ** 2

  const easeOut = createEaseOut(easeIn)

  expect(easeOut(0)).toBe(1 - easeIn(1 - 0))
  expect(easeOut(0.25)).toBe(1 - easeIn(1 - 0.25))
  expect(easeOut(0.5)).toBe(1 - easeIn(1 - 0.5))
  expect(easeOut(0.75)).toBe(1 - easeIn(1 - 0.75))
  expect(easeOut(1)).toBe(1 - easeIn(1 - 1))
})
