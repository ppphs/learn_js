var money = 120300000.11
let addComma = (money) => {
  // replace第一个参数正则后面带g的话就会重复执行回调全局字符串操作
  return money.toString().replace(/\d(?=(\d{3})+\.)/g, function (str) { // "(?=exp)" 匹配exp前面的位置 断言
    return str + ','
  })
}
console.log(addComma(money))