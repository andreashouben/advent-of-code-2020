type Passport = string

export function parseDataIntoPassportArray(data: string): Passport[] {
  return data.split('\n\n')
}

export function isPassportValid(passport: Passport): boolean {
  const necessaryFields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt']

  const fieldObject: {[key: string]: string} = {}

  passport
    .replace(/\n/g, ' ')
    .split(' ')
    .map((value) => value.match(/(.*):(.*)/))
    .forEach((match) => {
      if (match) {
        fieldObject[match[1]] = match[2]
      }
    })

  return (
    necessaryFields
      .map((field) => Object.keys(fieldObject).includes(field))
      .filter((val) => !val).length === 0
  )
}

export function isValidYear(value: string, min: number, max: number): boolean {
  try {
    const number = parseInt(value)
    return number >= min && number <= max
  } catch {
    return false
  }
}

export function isValidHeight(value: string): boolean {
  const exp = /(\d*)(\w*)/
  if (exp.test(value)) {
    const exec = value.match(exp)
    const height = exec ? parseInt(exec[1]) : null
    const unit = exec ? exec[2] : null
    if (!height || !unit) {
      return false
    }
    if (unit === 'cm') {
      return height >= 150 && height <= 193
    }
    if (unit === 'in') {
      return height >= 59 && height <= 76
    }
  }
  return false
}

export function isValidHairColor(value: string): boolean {
  return /^#((\d|[a-f]){6})$/.test(value)
}

export function isValidEyeColor(value: string): boolean {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)
}

export function isValidPid(value: string): boolean {
  return /^\d{9}$/.test(value)
}
