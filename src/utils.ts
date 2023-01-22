import { wordCount, words } from './data/words'
import config from './config'

export const upperCaseAlphabet: Array<string> = Array(26)
  .fill(null)
  .map((_: any, i: number) => String.fromCharCode(97 - 32 + i))

export const lowerCaseAlphabet: Array<string> = upperCaseAlphabet.map(
  (letter: string) => letter.toLowerCase()
)

export const alphabet: Array<string> = [
  ...lowerCaseAlphabet,
  ...upperCaseAlphabet
]

export const keyboard: Array<Array<string>> = [
  ['QWERTYUIOP'],
  ['ASDFGHJKL'],
  ['ZXCVBNM']
].map((row: Array<string>) => row[0].split(''))

export const wordListContains = (word: string): boolean => {
  word = word.toLowerCase()
  return Boolean(words[word])
}

export const isFiveCharLong = (word: string): boolean => {
  return word.length === 5
}

export const wordOfTheDay = (): string => {
  const start = new Date(2023, 0, 0).getTime()
  const now = new Date().getTime()
  let days = ~~((now - start) / (60 * 60 * 24 * 1000))
  while (days > wordCount) {
    days -= wordCount
  }
  return Object.keys(words)[days]
}

export const snapshot = (guesses: Array<Array<string | null>>): void => {
  localStorage.setItem(config.storage.boardKey, JSON.stringify(guesses))
}

export const today = (): string => {
  return new Date().toLocaleDateString('en-US')
}

export const isJson = (input: string | null): boolean => {
  try {
    JSON.parse(input)
    return true
  } catch {
    return false
  }
}

export const storage = (
  key: string,
  value: Array<any> | string | null = null
) => {
  if (!value) {
    const result = localStorage.getItem(key)
    if (isJson(result)) return JSON.parse(result)
    return result
  }

  if (Array.isArray(value))
    return localStorage.setItem(key, JSON.stringify(value))
  else return localStorage.setItem(key, value)
}
