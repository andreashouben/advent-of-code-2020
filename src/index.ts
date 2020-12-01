import {solveDoor01} from './1'
const run = async () => {
  const solvers = [solveDoor01()]

  const solutions = await Promise.all(solvers)
  solutions.forEach((solution, index) => {
    const doorNumber = (index + 1).toString().padStart(2, '0')
    console.log(`Solution to door ${doorNumber}: ${solution}`)
  })
}

run()
