import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import RegularBoardRow from './RegularBoardRow'
import RevealedBoardRow from './RevealedBoardRow'

export default function Board() {
  const { guesses, currentIndex } = useContext(AppContext)

  return (
    <section id='board'>
      {guesses.map((guess: Array<string | null>, i: number) => {
        if (i < currentIndex) {
          return (
            <RevealedBoardRow
              rowIndex={i}
              guess={guess}
            />
          )
        }

        return (
          <RegularBoardRow
            rowIndex={i}
            guess={guess}
          />
        )
      })}
    </section>
  )
}
