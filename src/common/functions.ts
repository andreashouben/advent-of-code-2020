export const convertToArrayOfNumbers = (numbers: string): number[] => {
  return numbers.split('\n').map((value) => parseInt(value))
}
export const findTwoNumbersOnArrayThatAddupTo = (
  array: number[],
  number: number,
): {first: number; second: number} => {
  const pairs = permutateArray(array, 3)

  const match = pairs.find((pair) => pair[0] + pair[1] === number)

  if (match) {
    return {
      first: match[0],
      second: match[1],
    }
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
