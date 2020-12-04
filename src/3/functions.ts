export const convertMapToArray = (map: string): string[] => {
  return map.split('\n')
}
export const travelHorizontal = (
  mapArray: string[],
  startCoordinate: number[],
  travel: number,
): number[] => {
  const maxWidth = mapArray[0].length
  const target = startCoordinate[0] + travel
  const correctTarget = target > maxWidth - 1 ? target - maxWidth : target

  return [correctTarget, startCoordinate[1]]
}
export const travelVertical = (
  mapArray: string[],
  startCoordinate: number[],
  number: number,
): number[] => {
  return [startCoordinate[0], startCoordinate[1] + number]
}
