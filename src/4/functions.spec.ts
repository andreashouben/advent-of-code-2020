import {isPassportValid, parseDataIntoPassportArray} from './functions'

describe('parseDataIntoPassportArray', () => {
  it('should create a new group after every emptyline', () => {
    const data = `aaaa

bbb
ccc

ddd`

    const actual = parseDataIntoPassportArray(data)

    expect(actual).toEqual(['aaaa', 'bbb\nccc', 'ddd'])
  })
})
describe('isPassportValid', () => {
  it('should recognize a passport containing all necessary fields', () => {
    const passPort = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`

    expect(isPassportValid(passPort)).toBe(true)
  })

  it('should accept a passport that is missing cid', () => {
    const passport = `hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm`

    expect(isPassportValid(passport)).toBe(true)
  })

  it('should reject a passort that is missing height', () => {
    const passport = `iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929`

    expect(isPassportValid(passport)).toBe(false)
  })

  it('should reject a passport that is missing two fields', () => {
    const passport = `cl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`

    expect(isPassportValid(passport)).toBe(false)
  })
})
