import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { keyboard } from '../utils'
import SubmitButton from './SubmitButton'

export default function Keyboard() {
  const { currentIndex, guesses, setGuesses } = useContext(AppContext)

  return (
    <section id='keyboard'>
      {keyboard.map((row, rowIndex) => (
        <div className='row'>
          {row.map((key) => (
            <button
              onClick={() => {
                const nextGuesses = guesses.map((row, i) => {
                  if (i === currentIndex) {
                    row[row.indexOf(null)] = key
                  }
                  return row
                })
                setGuesses(nextGuesses)
              }}
              className='key'>
              {key}
            </button>
          ))}
          {rowIndex + 1 === keyboard.length ? <SubmitButton /> : ''}
        </div>
      ))}
    </section>
  )
}
