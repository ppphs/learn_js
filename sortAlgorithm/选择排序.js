
/*
  选择排序 正序排序原理：一次次的遍历，遍历一次找到最小值的下标，放到正在排序好的数字的后面
*/
// 优点：内存占用的少

function selectionSort (arr) {
  let len = arr.length
  let minIndex
  let temp

  for (let i = 0; i < len - 1; i++) {
    minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

console.log(selectionSort([1, 3, 2, 8, 6, 5, 3, 10]))
