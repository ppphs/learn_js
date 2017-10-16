{
  // Array.prototype.indexOf去重

  let distinct = function (arr) {
    let temp = []
    for (let el of arr) {
      temp.indexOf(el) === -1 && temp.push(el)
    }
    return temp
  }
  console.log(distinct([1, 2 ,3, 4, 3, 2, 8, 9, 10, 8, 9 , 10]))
}
{
  // Array.prototype.indexOf去重 方法二

  let distinct = function (arr) {
    let temp = []
    for (let i in arr) {
      // 因为i的值为string类型indexOf返回的是number类型，所以比较的时候要用==，或者=== parseInt(i)或者=== Number(i)
      arr.indexOf(arr[i]) == i && temp.push(el)
    }
    return temp
  }
  console.log(distinct([1, 2 ,3, 4, 3, 2, 8, 9, 10, 8, 9 , 10]))
}
{
  // ES6的Set

  let distinct = function (arr) {
    return Array.from(new Set(arr))
  }
  console.log(distinct([1, 2 ,3, 4, 3, 2, 8, 9, 10, 8, 9 , 10]))
}
{
  // ...操作符配合Set

  let distinct = function (arr) {
    return [...new Set(arr)]
  }
  console.log(distinct([1, 2 ,3, 4, 3, 2, 8, 9, 10, 8, 9 , 10]))
}