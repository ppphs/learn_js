// Array.of 创建数组
console.log(Array.of(1, 2, 3)) // [1, 2, 3]
console.log(Array.of()) // []

// Array.from 对伪数组或者可迭代的对象转换成数组对象

console.log(Array.from('abc')) // ['a', 'b', 'c']
let set = new Set(['abc', 1])
console.log(Array.from(set)) // ['abc', 1]
console.log(Array.from([1, 2, 3], x => x * 2)) // [2, 4, 6]

// Array.prototype.fill() 第一参数：用来填充数组的数字；第二参数：开始的下标；第三参数：结束的位置（不包括这个位置）

console.log([1, 2, 3].fill(1)) // [1, 1, 1]
console.log([1, 2, 3].fill(4, 1, 2)) // [1, 4, 3]

// Array.prototype.copyWithin() 改变自身数组，从自身拷贝然后替换自身元素
// 第一个参数：开始替换的下标；第二参数：源开始位置；第三参数：源结束位置不包括这个元素

console.log(['a', 'b', 'c', 'd'].copyWithin(1, 2)) // [ "a", "c", "d", "d" ]

console.log(['a', 'b', 'c', 'd'].copyWithin(1, 2, 3)) // [ "a", "c", "c", "d" ]

// Array.prototype.find()
console.log([1, 2, 3, 4].find(el => el > 2)) // 3

// Array.prototype.findIndex()
console.log([1, 2, 3, 4].findIndex(el => el > 2)) // 2

// Array.prototype.includes()
console.log([1, 2, 3, NaN].includes(NaN)) // true
console.log([1, 2, 3, NaN].includes(4)) // false

