import {
  convertToArrayOfNumbers,
  findNumbersOnArrayThatAddUpTo,
  permutateArray,
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
  describe('findNumbersOnArrayThatAddUpTo', () => {
    it('should return the numbers of a 2 length array that add up to an expected value', () => {
      const array = [
        [1, 2],
        [1, 3],
        [2, 3],
      ]

      const match = findNumbersOnArrayThatAddUpTo(array, 3)

      expect(match).toEqual([1, 2])
    })
    it('should return the numbers of a 3 length array that add up to an expected value', () => {
      const array = [[1, 2, 3]]

      const match = findNumbersOnArrayThatAddUpTo(array, 6)

      expect(match).toEqual([1, 2, 3])
    })
  })

  describe('permutateArray', () => {
    it('should permutate an array creating unique entries with length of 2', () => {
      const array = [1, 2, 3]

      const actual = permutateArray(array)

      expect(actual).toEqual([
        [1, 2],
        [1, 3],
        [2, 3],
      ])
    })

    it('should permutate an array of lenght 3 creating unique entries with length of 3', () => {
      const array = [1, 2, 3]

      const actual = permutateArray(array, 3)

      expect(actual).toEqual([[1, 2, 3]])
    })

    it('should permutate an array of lenght 4 creating unique entries with length of 3', () => {
      const array = [1, 2, 3, 4]

      const actual = permutateArray(array, 3)

      expect(actual).toEqual([
        [1, 2, 3],
        [1, 2, 4],
        [1, 3, 4],
        [2, 3, 4],
      ])
    })
    it('should permutate an array of lenght 5 creating unique entries with length of 3', () => {
      const array = [1, 2, 3, 4, 5]

      const actual = permutateArray(array, 3)

      expect(actual).toEqual([
        [1, 2, 3],
        [1, 2, 4],
        [1, 2, 5],
        [1, 3, 4],
        [1, 3, 5],
        [1, 4, 5],
        [2, 3, 4],
        [2, 3, 5],
        [2, 4, 5],
        [3, 4, 5],
      ])
    })
  })
})
