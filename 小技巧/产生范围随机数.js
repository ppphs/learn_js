function produceRandomNum (start, end) {
  let width = end - start
  return Math.floor(Math.random() * width + start)
}