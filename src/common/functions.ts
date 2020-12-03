export const convertToArrayOfNumbers = (numbers: string): number[] => {
  return numbers.split('\n').map((value) => parseInt(value))
}
export const findTwoNumbersOnArrayThatAddupTo = (
  array: number[],
  number: number,
): {first: number; second: number} => {
  const pairs: number[][] = []
  while (array.length > 0) {
    const first = array.splice(0, 1)[0]
    array.forEach((value) => pairs.push([first, value]))
  }

  const match = pairs.find((pair) => pair[0] + pair[1] === number)

  if (match) {
    return {
      first: match[0],
      second: match[1],
    }
  }
  throw new Error('no Match found')
}
