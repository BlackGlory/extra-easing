import { test, expect } from 'vitest'
import { createEaseInOut } from '@utils/create-ease-in-out.js'

test('createEaseInOut', () => {
  const easeIn = (x: number) => x ** 2
  const easeOut = (x: number) => x ** 3

  const easeInOut = createEaseInOut(easeIn, easeOut)

  expect(easeInOut(0)).toBe(easeIn(0) / 2)
  expect(easeInOut(0.25)).toBe(easeIn(0.5) / 2)
  expect(easeInOut(0.5)).toBe(0.5)
  expect(easeInOut(0.75)).toBe(0.5 + easeOut(0.5) / 2)
  expect(easeInOut(1)).toBe(0.5 + easeOut(1) / 2)
})
