export default interface ContextInterface {
  guesses: Array<Array<string>>;
  currentIndex: number;
  setGuesses: Function;
  setCurrentIndex: Function;
}
