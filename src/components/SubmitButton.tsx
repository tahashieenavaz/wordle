import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { isFiveCharLong, wordListContains } from '../utils'

export default function SubmitButton() {
  const { guesses, currentIndex, setCurrentIndex } = useContext(AppContext)

  const submitWord = (word: string) => {
    if (!isFiveCharLong(word)) {
      return console.log('word incomplete')
    }

    if (!wordListContains(word)) {
      return console.log('not found')
    }

    setCurrentIndex((old: number) => old + 1)
  }
  return (
    <>
      <button
        onClick={() => submitWord(guesses[currentIndex].join(''))}
        style={{
          width: 'fit-content',
          height: 'var(--button-size)',
        }}>
        ENTER
      </button>
    </>
  )
}
