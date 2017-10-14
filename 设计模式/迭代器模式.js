/*
  迭代器模式
*/

let Iterator = function (obj) {
  let current = 0

  let next = function () {
    current++
  }

  let isDone = function () {
    return current >= obj.length
  }

  let getCurrItem = function () {
    return obj[current]
  }

  return {
    next,
    isDone,
    getCurrItem
  }
}

let simpleCompare = function (iterator1, iterator2) {

  while ( !iterator1.isDone() || !iterator2.isDone() ) {
    if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
      return false
    }
    iterator1.next()
    iterator2.next()
  }
  return true
}

let iterator1 = Iterator([1, 2, 3])
let iterator2 = Iterator([1, 2, 3, 4])

console.log(simpleCompare(iterator1, iterator2))
