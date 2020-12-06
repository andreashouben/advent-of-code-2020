import {isPassportValid, parseDataIntoPassportArray} from './functions'

export const solveDoor04_1 = (data: string): number => {
  const passports = parseDataIntoPassportArray(data)

  return passports
    .map((passport) => isPassportValid(passport))
    .filter((valid) => valid).length
}
