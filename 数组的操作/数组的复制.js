var arr = [1, 2, [3, 4], 5]

// 深复制
var copyArr = JSON.parse(JSON.stringify(arr)) // copyArr[2] === arr[2] false

// 浅复制

var copyArr1 = arr.slice()

var copyArr2 = [...arr]

var copyArr3 = [].concat(arr)