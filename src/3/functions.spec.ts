import {convertMapToArray, travelHorizontal, travelVertical} from './functions'

describe('convertMapToArray', () => {
  it('should convert the map as string into an array', () => {
    const map = `..##
#..#`
    const actual = convertMapToArray(map)

    expect(actual).toEqual(['..##', '#..#'])
  })
})

describe('travelHorizontal', () => {
  it(`should move east for the given steps from the start 
  coordinate and return the new coordinate`, () => {
    const startCoordinate = [0, 0]

    const mapArray = ['.....']

    const targetCoordinate = travelHorizontal(mapArray, startCoordinate, 3)

    expect(targetCoordinate).toEqual([3, 0])
  })

  it('should start back on the left side when it reaches the end of the string', () => {
    const mapArray = ['.....']
    const startCoordinate = [4, 0]

    const targetCoordinate = travelHorizontal(mapArray, startCoordinate, 3)

    expect(targetCoordinate).toEqual([2, 0])
  })
})

describe('travelVertical', () => {
  it('should move south for the given steps from the start coordinate and return the new coordinate', () => {
    const mapArray = ['.', '.']
    const startCoordinate = [0, 0]

    const targetCordinate = travelVertical(mapArray, startCoordinate, 1)

    expect(targetCordinate).toEqual([0, 1])
  })
})
