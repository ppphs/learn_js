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