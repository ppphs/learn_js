/*
  冒泡排序  正序排序原理：每次比较两个数都把大的数放到后面，这样在一轮比较后最后的一个数就是这个数列里面最大的，然后再进行下一轮比较直到
*/

// function bubbleSort (arr) {
//   let len = arr.length
//   let temp

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < len - 1 -i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }

//   return arr
// }

// console.log(bubbleSort([1, 3, 2, 8, 6, 5, 3]))

/*
  选择排序 正序排序原理：一次次的遍历，遍历一次找到最小值的下标，放到正在排序好的数字的后面
*/
// 优点：内存占用的少


// function selectionSort (arr) {
//   let len = arr.length
//   let minIndex
//   let temp

//   for (let i = 0; i < len - 1; i++) {
//     minIndex = i

//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }

//     temp = arr[i]
//     arr[i] = arr[minIndex]
//     arr[minIndex] = temp
//   }

//   return arr
// }

// console.log(selectionSort([1, 3, 2, 8, 6, 5, 3, 10]))

/*
  插入排序
*/

// function insertionSort (arr) {
//   let len = arr.length
//   let current, moveIndex

//   for (let i = 1; i < len; i++) {
//     moveIndex = i - 1
//     current = arr[i]
//     while (moveIndex >= 0 && arr[moveIndex] > current) {
//       arr[moveIndex + 1] = arr[moveIndex]
//       moveIndex--
//     }
//     arr[moveIndex + 1] = current
//   }

//   return arr
// }

// console.log(insertionSort([2, 1, 3]))

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