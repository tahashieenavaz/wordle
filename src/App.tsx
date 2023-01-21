import { AppContext } from './contexts/AppContext'
import ContextInterface from './interfaces/ContextInterface'

import Board from './components/Board'
import Keyboard from './components/Keyboard'

import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [guesses, setGuesses] = useState(
    Array(6)
      .fill(null)
      .map(() => Array(5).fill(null))
  )

  useEffect(() => {
    const countArray = guesses.map((row) => row.filter(Boolean).length)
    setCurrentIndex(countArray.findIndex((element) => element != 5))
  }, [guesses])

  const store: ContextInterface = {
    currentIndex,
    guesses,
    setCurrentIndex,
    setGuesses,
  }

  return (
    <AppContext.Provider value={store}>
      <Board />
      <Keyboard />
    </AppContext.Provider>
  )
}

export default App
