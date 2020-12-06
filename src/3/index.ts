import {convertMapToArray, travelHorizontal, travelVertical} from './functions'

export const solveDoor03_1 = (
  data: string,
  travelHoriz = 3,
  travelVert = 1,
): number => {
  let coordinate = [0, 0]

  const map = convertMapToArray(data)
  let trees = 0
  while (coordinate[0] < map.length - 1) {
    coordinate = travelHorizontal(map, coordinate, travelHoriz)
    coordinate = travelVertical(map, coordinate, travelVert)
    const field = map[coordinate[0]][coordinate[1]]
    if (field === '#') {
      trees++
    }
  }
  return trees
}

export const solveDoor03_2 = (data: string): number => {
  const map = convertMapToArray(data)
  return [
    solveDoor03_1(data, 1, 1),
    solveDoor03_1(data, 3, 1),
    solveDoor03_1(data, 5, 1),
    solveDoor03_1(data, 7, 1),
    solveDoor03_1(data, 1, 2),
  ].reduce((a, b) => a * b)
}
