/*
  冒泡排序  正序排序原理：每次比较两个数都把大的数放到后面，这样在一轮比较后最后的一个数就是这个数列里面最大的，然后再进行下一轮比较直到
*/

function bubbleSort (arr) {
  let len = arr.length
  let temp

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 -i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  return arr
}

console.log(bubbleSort([1, 3, 2, 8, 6, 5, 3]))
