var map = new Map()

var myObj = {},
  myFn = function () {},
  myString = 'abc'

// 添加值
map.set(myObj, 'myObj的值')
map.set(myFn, 'myFn的值')
map.set(myString, 'myString的值')

// 键值对数量
map.size // 3

// 读取值
map.get(myObj) // myObj的值
map.get(myFn) // myFn的值
map.get(myString) // myString的值

map.get('abc') // myString的值
map.get({}) // undefined, 因为myObj !== {}
map.get(function () {}) // undefined, 因为myFn !== function () {}

// for of 遍历
for (let [key, value] of map) {
  console.log(key + '=' + value)
}

// forEach遍历
map.forEach((value, key) => console.log(key + '=' + value))

// Map.prototype.delete(key) 移除任何与键相关联的值
map.delete(myObj) // true

// Map.prototype.has() 判断是否包含键
map.has(myObj) // false

// Map.prototype.clear() 移除所有键值对
map.clear()