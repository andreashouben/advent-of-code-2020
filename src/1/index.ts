import {
  convertToArrayOfNumbers,
  findNumbersOnArrayThatAddupTo,
} from './functions'

export const solveDoor01 = (data: string): number => {
  const numbers = convertToArrayOfNumbers(data)
  const {first, second} = findNumbersOnArrayThatAddupTo(numbers, 2020)
  return first * second
}
