// 首位首字母大写
function toUpper (str) {
  return str.replace(/^[a-z]/, str => str.toUpperCase())
}

// 边界字母都大写
function toUpperAll (str) {
  return str.replace(/\b[a-z]{1}/g, str => str.toUpperCase())
}

let demo = 'this is a boy.'
console.log(toUpper(demo))
console.log(toUpperAll(demo))