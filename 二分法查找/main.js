var arr = [8, 6, 4, 3, 5, 10]

var find = function (arr, target) {
  let l, r, mid
  if (typeof target === 'undefined' || typeof target !== 'number') {
    return -1
  }
  arr = arr.sort((a, b) => a - b)

  l = 0
  r = arr.length - 1
  while (l <= r) {
    mid = Math.floor((l + r) / 2)
    if (target === arr[mid]) {
      return mid // 这里返回的是数组正序排序后的索引
    }
    target < arr[mid] ? (r = mid - 1) : (l = mid + 1)
  }
  return -1
}

console.log(find(arr, 6))
console.log(arr)