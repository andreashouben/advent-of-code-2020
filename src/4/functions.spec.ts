import {
  isPassportValid,
  isValidEyeColor,
  isValidHairColor,
  isValidHeight,
  isValidPid,
  isValidYear,
  parseDataIntoPassportArray,
} from './functions'
import each from 'jest-each'

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

  each([
    [
      `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f`,
    ],
    [
      `eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm`,
    ],
    [
      `hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022`,
    ],
  ]).it('%s should be accepted', (passport) => {
    expect(isPassportValid(passport)).toBe(true)
  })

  each([
    [
      `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`,
    ],
    [
      `iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946`,
    ],
    [
      `hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277`,
    ],
    [
      `hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`,
    ],
  ]).it('%s should be rejected', (passport) => {
    expect(isPassportValid(passport)).toBe(false)
  })
})

describe('isValidYear', () => {
  each([
    ['1919', 1920, 2020, false],
    ['1920', 1920, 2020, true],
    ['2020', 1920, 2020, true],
    ['202b', 1920, 2020, false],
  ]).it(
    'should return for %s between %d and $d: $p ',
    (value, min, max, expected) => {
      const actual = isValidYear(value, min, max)

      expect(actual).toBe(expected)
    },
  )
})

describe('isValidHeight', () => {
  each([
    [false, '149cm'],
    [true, '150cm'],
    [true, '193cm'],
    [false, '194cm'],
    [false, '58in'],
    [true, '59in'],
    [true, '76in'],
    [false, '77in'],
    [false, '72'],
    [false, '75'],
  ]).it('should return %p for %s', (expected, value) => {
    const actual = isValidHeight(value)

    expect(actual).toBe(expected)
  })
})

describe('isValidHairColor', () => {
  each([
    [true, '#123abc'],
    [false, '#123abz'],
    [false, '#123abcd'],
    [false, '#123ab'],
    [false, '123abc'],
  ]).it('should return %p for %d', (expected, value) => {
    const actual = isValidHairColor(value)

    expect(actual).toBe(expected)
  })
})

describe('isValidEyeColor', () => {
  each([['amb'], ['blu'], ['brn'], ['gry'], ['grn'], ['hzl'], ['oth']]).it(
    'should return true for %s',
    (value) => {
      expect(isValidEyeColor(value)).toBe(true)
    },
  )
})

describe('isValidPid', () => {
  each([
    [true, '000000001'],
    [false, '0123456789'],
    [false, '00000002'],
  ]).it('should return %p for %s', (expected, value) => {
    const actual = isValidPid(value)

    expect(actual).toBe(expected)
  })
})
