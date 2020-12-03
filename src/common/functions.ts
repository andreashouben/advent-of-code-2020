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

export const permutateArray = (array: number[], width = 2): number[][] => {
  const pairs: number[][] = []
  if (width == 2) {
    while (array.length > 0) {
      const first = array.splice(0, 1)
      array.forEach((value) => pairs.push([...first, value]))
    }
  } else if (width === 3) {
    while (array.length > 0) {
      const pair = []
      const first = array.splice(0, 1)
      const arrayClone = [...array]
      while (arrayClone.length > 0) {
        const second = arrayClone.splice(0, 1)
        arrayClone.forEach((value) => pairs.push([...first, ...second, value]))
      }
    }
  }

  return pairs
}
