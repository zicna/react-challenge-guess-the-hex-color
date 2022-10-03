const arr = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]

export const randHex = () => {
  const hexArr = Array.from(Array(6)).map(
    () => arr[Math.floor(Math.random() * arr.length)]
  )
  hexArr.unshift('#')
  return hexArr.join('')
}

// * returns random number [0, upperLimit]
// * 0 and upperLimit included
// * with last refactor it is not needed anymore

export const randNum = (lowerLimit, upperLimit) => {
  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit)
}
