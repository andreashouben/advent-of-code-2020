import {solveDoor01} from './index'

describe('Door 1', () => {
  it('should find the numbers that add up to 2020 and multiply them', () => {
    const data = `1721
                 979
                 366
                 299 
                 675
                 1456`

    const actual = solveDoor01(data)

    expect(actual).toBe(514579)
  })
})
