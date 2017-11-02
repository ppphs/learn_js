/*
  快速排序 优点：使用得最广泛，速度也较快
*/

// 第一步，选择中间的元素45作为"基准"。（基准值可以任意选择，但是选择中间的值比较容易理解。）
// 第二步，按照顺序，将每个元素与"基准"进行比较，形成两个子集，一个"小于45"，另一个"大于等于45"。
// 第三步，对两个子集不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

function quickSort (arr) {
  if (arr.length <= 1) { // 如果数组只有一个值就不用再比较排序了
    return arr
  }
  var pivotIndex = Math.floor(arr.length / 2) // 设置基准值
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = [] // 比基准值小的放这个数组
  var right = [] // 比基准值大的放这个数组

  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
