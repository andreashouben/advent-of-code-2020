import {solveDoor01} from './1'
import {data as dataDay01} from './common/data'
import {data as dataDay03} from './3/data'
import figlet from 'figlet'
import {solveDoor02} from './2'
import {solveDoor03_1, solveDoor03_2} from './3'
import {solveDoor04_1} from './4'
import {data as dataDay04} from './4/data'
const run = () => {
  const solutions = [
    ['01', solveDoor01(dataDay01)],
    ['02', solveDoor02(dataDay01)],
    ['03.1', solveDoor03_1(dataDay03)],
    ['03.2', solveDoor03_2(dataDay03)],
    ['04.1', solveDoor04_1(dataDay04)],
  ]

  console.log(figlet.textSync('Advent of code'))
  solutions.forEach((solution) => {
    const doorNumber = (<string>solution[0]).padEnd(4, ' ')
    console.log(`Solution to door ${doorNumber}: ${solution[1]}`)
  })
}

run()
