import {solveDoor03_1, solveDoor03_2} from './index'

describe('door 3', () => {
  const data = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`
  it('should return 7 from sample data', () => {
    const answer = solveDoor03_1(data)

    expect(answer).toBe(7)
  })

  it('should return 336 for example 2', () => {
    const answer = solveDoor03_2(data)

    expect(answer).toBe(336)
  })
})
