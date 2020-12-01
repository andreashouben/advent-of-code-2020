export const convertToArrayOfNumbers = (numbers: string): number[] => {
  return numbers.split('\n').map((value) => parseInt(value))
}
export const findNumbersOnArrayThatAddupTo = (
  array: number[],
  number: number,
): {first: number; second: number} => {
  const match = array
    .map((value) => array.map((value1) => [value, value1]))[0]
    .find((pair) => pair[0] + pair[1] === number)

  if (match) {
    return {
      first: match[0],
      second: match[1],
    }
  }
  throw new Error('no Match found')
}
