export const upperCaseAlphabet = Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(97 - 32 + i));

export const lowerCaseAlphabet = upperCaseAlphabet.map((letter: string) =>
  letter.toLowerCase()
);

export const alphabet = [...lowerCaseAlphabet, ...upperCaseAlphabet];
