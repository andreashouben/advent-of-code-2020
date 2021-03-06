import {
  convertToArrayOfNumbers,
  findNumbersOnArrayThatAddUpTo,
  permutateArray,
} from '../common/functions'

export const solveDoor01 = (data: string): number => {
  const numbers = convertToArrayOfNumbers(data)
  const groups = permutateArray(numbers)
  const match = findNumbersOnArrayThatAddUpTo(groups, 2020)
  return match.reduce((a, b) => a * b)
}
