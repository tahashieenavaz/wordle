import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import BoardRowPropsInterface from '../interfaces/BoardRowPropsInterface'

export default function RevealedBoardRow({
  guess,
  rowIndex
}: BoardRowPropsInterface) {
  const { todayWord } = useContext(AppContext)

  console.log(todayWord)

  return (
    <div className='row'>
      {guess.map((letter: string | null, j: number) => {
        let className = `letter `
        if (todayWord[j] === letter?.toLowerCase()) className += 'correct '
        else if (todayWord.includes(letter?.toLowerCase())) className += 'exist'

        return (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
            key={`${j}${rowIndex}s`}
            className={className}>
            {letter}
          </motion.div>
        )
      })}
    </div>
  )
}
