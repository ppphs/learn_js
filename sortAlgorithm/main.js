/*
  冒泡排序
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
  选择排序
*/

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