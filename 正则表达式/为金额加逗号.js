var money = 120300000.11
let addComma = (money) => {
  return money.toString().replace(/\d(?=(\d{3})+\.)/g, function (str) { // "(?=exp)" 匹配exp前面的位置 断言
    return str + ','
  })
}
console.log(addComma(money))