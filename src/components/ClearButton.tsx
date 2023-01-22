import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

export default function ClearButton() {
  const { setGuesses, guesses, currentIndex } = useContext(AppContext)

  return (
    <button
      onClick={() => {
        const nextGuesses = guesses.map(
          (guess: Array<string | null>, index: number) => {
            if (index === currentIndex) {
              const nullIndex: number = guess.indexOf(null) - 1

              if (nullIndex != -2) guess[nullIndex] = null
              else guess[4] = null
            }
            return guess
          }
        )

        setGuesses(nextGuesses)
        console.log(guesses)
      }}>
      CLR
    </button>
  )
}
