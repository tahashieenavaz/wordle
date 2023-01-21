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
