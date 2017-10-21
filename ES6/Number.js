// 判断输入的数是不是一个有限集合
console.log(Number.isFinite(1)) // true
console.log(Number.isFinite(Infinity)) // false

// 是否为NaN
console.log(Number.isNaN(1))

// 判断是否是整数
console.log(Number.isInteger(1)) // true
console.log(Number.isInteger(1.0)) // true
console.log(Number.isInteger(1.1)) // false
console.log(Number.isInteger('1.0')) // false
console.log(Number.isInteger('1.1')) // false

// Number.isSafeInteger()判断是否为安全数
console.log(Number.isSafeInteger(1)) // true
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

// 数字取整
console.log(Math.trunc(1.23)) // 1
console.log(Math.trunc(-1.23)) // -1
console.log(Math.trunc(NaN)) // NaN

// 判断正负
console.log(Math.sign(-2)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign(2)) // 1
console.log(Math.sign('2')) // 1

// 立方根
console.log(Math.cbrt(8)) // 2