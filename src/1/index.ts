import {
  convertToArrayOfNumbers,
  findTwoNumbersOnArrayThatAddupTo,
} from '../common/functions'

export const solveDoor01 = (data: string): number => {
  const numbers = convertToArrayOfNumbers(data)
  const {first, second} = findTwoNumbersOnArrayThatAddupTo(numbers, 2020)
  return first * second
}
