import BoardRowPropsInterface from '../interfaces/BoardRowPropsInterface'
import { motion } from 'framer-motion'

export default function RegularBoardRow({
  guess,
  rowIndex,
}: BoardRowPropsInterface) {
  return (
    <motion.div className='row'>
      {guess.map((letter: string | null, j: number) => {
        return (
          <div
            className='letter'
            key={`${j}${rowIndex}a`}>
            {letter}
          </div>
        )
      })}
    </motion.div>
  )
}
