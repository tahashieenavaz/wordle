import { words } from './data/words'

export const upperCaseAlphabet: Array<string> = Array(26)
  .fill()
  .map((_: any, i: number) => String.fromCharCode(97 - 32 + i))

export const lowerCaseAlphabet: Array<string> = upperCaseAlphabet.map(
  (letter: string) => letter.toLowerCase()
)

export const alphabet: Array<string> = [
  ...lowerCaseAlphabet,
  ...upperCaseAlphabet,
]

export const keyboard: Array<Array<string>> = [
  ['QWERTYUIOP'],
  ['ASDFGHJKL'],
  ['ZXCVBNM'],
].map((row: Array<string>) => row[0].split(''))

export const wordListContains = (word: string): boolean => {
  word = word.toLowerCase()
  return Boolean(words[word])
}

export const isFiveCharLong = (word: string): boolean => {
  return word.length === 5
}
