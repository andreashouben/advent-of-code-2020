type Passport = string

export function parseDataIntoPassportArray(data: string): Passport[] {
  return data.split('\n\n')
}

export function isPassportValid(passport: Passport): boolean {
  const necessaryFields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt']

  const fieldsFound = passport
    .replace(/\n/g, ' ')
    .split(' ')
    .map((field) => {
      const match = /(.*):.*/.exec(field)
      return match && match[1] ? match[1] : ''
    })

  return (
    necessaryFields
      .map((field) => fieldsFound.includes(field))
      .filter((val) => !val).length === 0
  )
}
