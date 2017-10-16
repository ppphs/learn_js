const judgeType = obj => Object.prototype.toString.call(obj).slice(8, -1)

console.log(judgeType([1])) // Array
console.log(judgeType({})) // Object
console.log(judgeType(1)) // Number
console.log(judgeType(NaN)) // Number
console.log(judgeType('1')) // String
console.log(judgeType(true)) // Boolean
console.log(judgeType(undefined)) // Undefined
console.log(judgeType(null)) // Null
console.log(judgeType(new Daye())) // Date