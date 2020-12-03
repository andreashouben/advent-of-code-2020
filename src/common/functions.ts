export const convertToArrayOfNumbers = (numbers: string): number[] => {
  return numbers.split('\n').map((value) => parseInt(value))
}
export const findNumbersOnArrayThatAddUpTo = (
  array: number[][],
  number: number,
): number[] => {
  const match = array.find((pair) => pair.reduce((a, b) => a + b) === number)

  if (match) {
    return match
  }
  throw new Error('no Match found')
}

const recursive = (
  array: number[],
  i: number,
  maxlength: number,
  groupStart: number[],
  groups: number[][],
) => {
  while (array.length > 0) {
    groupStart[i] = array.splice(0, 1)[0]
    if (i < maxlength - 2) {
      recursive([...array], i + 1, maxlength, groupStart, groups)
    } else {
      array.forEach((val) => groups.push([...groupStart, val]))
    }
  }
}

export const permutateArray = (array: number[], width = 2): number[][] => {
  const groups: number[][] = []
  recursive(array, 0, width, new Array(width - 1), groups)

  return groups
}
