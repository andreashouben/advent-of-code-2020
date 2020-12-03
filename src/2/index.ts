import {
  convertToArrayOfNumbers,
  findNumbersOnArrayThatAddUpTo,
  permutateArray,
} from '../common/functions'

export const solveDoor02 = (data: string): number => {
  const numbers = convertToArrayOfNumbers(data)
  const permutated = permutateArray(numbers, 3)
  const match = findNumbersOnArrayThatAddUpTo(permutated, 2020)
  console.log(match)
  return match.reduce((a, b) => a * b)
}
