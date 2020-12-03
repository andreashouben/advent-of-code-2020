import {solveDoor02} from './index'

describe('Door 2', () => {
  it('should find the three numbers that add up to 2020 and multiply them', () => {
    const data = `1721
                 979
                 366
                 299 
                 675
                 1456`

    const actual = solveDoor02(data)

    expect(actual).toBe(241861950)
  })
})
