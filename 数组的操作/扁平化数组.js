function fn (arr) {
  { // toString
    let ret = arr.toString().split(',').map(numStr => +numStr)
    console.log(ret)
  }
  { // 递归方法
    let ret = []
    let recursionFn = function (arg) {
      Array.isArray(arg) ? arg.map(el => recursionFn(el)) : ret.push(arg)
    }
    recursionFn(arr)
    console.log(ret)
  }
  { // 用reduce递归
    let recursionReduce = function (arr) {
      return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? recursionReduce(b) : b)
      }, [])
    }
    console.log(recursionReduce(arr))
  }
  { // ...解构
    let delayering = function (arr) {
      while ( arr.some( el => Array.isArray(el) ) ) { // 用some来判断arr里面的每一项还有没有数组解构，有就返回true
        arr = [].concat(...arr)
      }
      return arr
    }
    console.log(delayering(arr))
  }
}

fn([1, [2, 3], [4], [[5, 6, [7], 8]], [9, [10, 11]], 12])