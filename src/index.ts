import {solveDoor01} from './1'
import {data as dataDay01} from './1/data'
import figlet from 'figlet'
const run = () => {
  const solutions = [solveDoor01(dataDay01)]

  console.log(figlet.textSync('Advent of code'))
  solutions.forEach((solution, index) => {
    const doorNumber = (index + 1).toString().padStart(2, '0')
    console.log(`Solution to door ${doorNumber}: ${solution}`)
  })
}

run()
