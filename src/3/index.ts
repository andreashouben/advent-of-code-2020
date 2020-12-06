import {convertMapToArray, travelHorizontal, travelVertical} from './functions'

export const solveDoor03 = (data: string): number => {
  let coordinate = [0, 0]

  const map = convertMapToArray(data)
  let trees = 0
  while (coordinate[0] < map.length - 1) {
    coordinate = travelHorizontal(map, coordinate, 3)
    coordinate = travelVertical(map, coordinate, 1)
    const field = map[coordinate[0]][coordinate[1]]
    if (field === '#') {
      trees++
    }
  }
  return trees
}
