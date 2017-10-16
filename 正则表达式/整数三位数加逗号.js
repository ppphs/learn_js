var intNum = 123456789

var intAddComma = function (num) {
  return num.toString().replace(/\d(?=(\d{3})+$)/g, function (str) {
    return str + ','
  })
}

console.log(intAddComma(intNum))