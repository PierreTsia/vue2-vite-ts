/**
 * used for demo
 */

const titleChoices = [
  'The force shall free me',
  'You shall not pass!',
  "It's a trap !",
  'Keep your friends close, but your enemies close.',
  'Yo, Adrian!',
  'My precious.',
  'A martini. Shaken, not stirred',
  'I see dead people.',
  'I feel the need - the need for speed!',
  'Houston, we have a problem',
]

export const randomQuote = () => titleChoices[Math.floor(Math.random() * titleChoices.length)]

export const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))
