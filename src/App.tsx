import { AppContext } from './contexts/AppContext'
import ContextInterface from './interfaces/ContextInterface'

import Board from './components/Board'
import Keyboard from './components/Keyboard'

import { useState } from 'react'

import './App.css'
import config from './config'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [submitted, setSubmitted] = useState(
    Array(config.numberOfQuestions).fill(false)
  )
  const [guesses, setGuesses] = useState<Array<Array<string | null>>>(
    Array(config.numberOfQuestions)
      .fill(null)
      .map(() => Array(5).fill(null))
  )

  const store: ContextInterface = {
    currentIndex,
    guesses,
    submitted,
    setCurrentIndex,
    setGuesses,
    setSubmitted,
  }

  return (
    <AppContext.Provider value={store}>
      <Board />
      <Keyboard />
    </AppContext.Provider>
  )
}

export default App
