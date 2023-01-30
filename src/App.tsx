import { AppContext } from './contexts/AppContext'
import ContextInterface from './interfaces/ContextInterface'

import Board from './components/Board'
import Keyboard from './components/Keyboard'

import { useEffect, useState } from 'react'

import './App.css'
import config from './config'
import { snapshot, storage, today, wordOfTheDay } from './utils'

function App() {
  const [submitted, setSubmitted] = useState(
    Array(config.numberOfQuestions).fill(false)
  )
  const [guesses, setGuesses] = useState<Array<Array<string | null>>>(
    storage(config.storage.boardKey)
  )
  const [currentIndex, setCurrentIndex] = useState(() => {
    for (let i = 0; i < guesses.length; i++) {
      if (guesses[i][0] === null) return i
    }

    return -1
  })
  const [isGameRunning, setIsGameRunning] = useState(() => {
    return storage(config.storage.isRunningKey)
  })

  useEffect(() => {
    if (storage(config.storage.dateKey) != today()) {
      storage(
        config.storage.boardKey,
        Array(config.numberOfQuestions)
          .fill(null)
          .map(() => Array(5).fill(null))
      )
    }
  }, [])

  useEffect(() => {
    snapshot(guesses)
  }, [guesses])

  const todayWord = wordOfTheDay()

  const store: ContextInterface = {
    currentIndex,
    guesses,
    submitted,
    setCurrentIndex,
    setGuesses,
    setSubmitted,
    todayWord
  }

  return (
    <AppContext.Provider value={store}>
      <Board />
      <Keyboard />
    </AppContext.Provider>
  )
}

export default App
