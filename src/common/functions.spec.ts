import {
  convertToArrayOfNumbers,
  findNumbersOnArrayThatAddupTo,
} from './functions'

describe('functions for door 1', () => {
  describe('convertToArray', () => {
    it('should convert a list of numbers, divided by CR to an array', () => {
      const numbers = `1
        2
        3`

      const actual = convertToArrayOfNumbers(numbers)

      expect(actual).toEqual([1, 2, 3])
    })
  })
  describe('should return the two numbers of an array that add up to an expected value', () => {
    const array = [1, 2, 3]

    const {first, second} = findNumbersOnArrayThatAddupTo(array, 3)

    expect(first).toEqual(1)
    expect(second).toEqual(2)
  })
})
