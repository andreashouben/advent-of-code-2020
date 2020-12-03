import {solveDoor01} from './1'
import {data as dataDay01} from './common/data'
import figlet from 'figlet'
import {solveDoor02} from './2'
const run = () => {
  const solutions = [solveDoor01(dataDay01), solveDoor02(dataDay01)]

  console.log(figlet.textSync('Advent of code'))
  solutions.forEach((solution, index) => {
    const doorNumber = (index + 1).toString().padStart(2, '0')
    console.log(`Solution to door ${doorNumber}: ${solution}`)
  })
}

run()
