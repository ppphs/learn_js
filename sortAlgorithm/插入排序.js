/*
  插入排序
*/

function insertionSort (arr) {
  let len = arr.length
  let current, moveIndex

  for (let i = 1; i < len; i++) {
    moveIndex = i - 1
    current = arr[i]
    while (moveIndex >= 0 && arr[moveIndex] > current) {
      arr[moveIndex + 1] = arr[moveIndex]
      moveIndex--
    }
    arr[moveIndex + 1] = current
  }

  return arr
}

console.log(insertionSort([2, 1, 3]))
