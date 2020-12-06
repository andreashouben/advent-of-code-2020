import {solveDoor03} from './index'

describe('door 3', () => {
  it('should return 7 from sample data', () => {
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

    const answer = solveDoor03(data)

    expect(answer).toBe(7)
  })
})
