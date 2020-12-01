import axios from 'axios'
import {when} from 'jest-when'
import {solveDoor01} from './index'

jest.mock('axios')

describe('Door 1', () => {
  it('should find the numbers that add up to 2020 and multiply them', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>
    when(mockedAxios.get)
      .calledWith('https://adventofcode.com/2020/day/1/input')
      .mockResolvedValue({
        data: `1721
979
366
299 
675
1456`,
      })

    const actual = await solveDoor01()

    expect(actual).toBe(514579)
  })
})
