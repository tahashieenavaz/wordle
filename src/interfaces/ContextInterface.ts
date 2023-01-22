export default interface ContextInterface {
  guesses: Array<Array<string | null>>
  currentIndex: number
  todayWord: string
  submitted: Array<boolean>
  setGuesses: Function
  setCurrentIndex: Function
  setSubmitted: Function
}
