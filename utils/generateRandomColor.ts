function generateRandomColor() {
  let randomNumber = Math.random() * 0xffffff // returns a floating point random number
  // convert the floating-point number to an integer
  randomNumber = Math.floor(randomNumber)
  let randomColor = randomNumber.toString(16).padStart(6, '0')

  return `#${randomColor.toUpperCase()}`
}

export default generateRandomColor
