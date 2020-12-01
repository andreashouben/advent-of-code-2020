import axios from 'axios'
import {
  convertToArrayOfNumbers,
  findNumbersOnArrayThatAddupTo,
} from './functions'

export const solveDoor01 = async (): Promise<number> => {
  const data = (
    await axios.get<string>('https://adventofcode.com/2020/day/1/input')
  ).data
  const numbers = convertToArrayOfNumbers(data)
  const {first, second} = findNumbersOnArrayThatAddupTo(numbers, 2020)
  return first * second
}
