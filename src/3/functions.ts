export const convertMapToArray = (map: string): string[] => {
  return map.split('\n')
}
export const travelHorizontal = (
  mapArray: string[],
  startCoordinate: number[],
  travel: number,
): number[] => {
  const maxWidth = mapArray[0].length
  const target = startCoordinate[1] + travel
  const correctTarget = target > maxWidth - 1 ? target - maxWidth : target

  return [startCoordinate[0], correctTarget]
}
export const travelVertical = (
  mapArray: string[],
  startCoordinate: number[],
  number: number,
): number[] => {
  return [startCoordinate[0] + number, startCoordinate[1]]
}
