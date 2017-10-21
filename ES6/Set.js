var set = new Set()

set.add(1) // Set [1]
set.add(1) // 第二次还是返回Set [ 1 ]，set对象里面没有重复的值
set.add(2) // Set [1, 2]

set.delete(2) // true 移除Set的中与这个值相等的元素，如果该元素存在，返回true，否则返回false
set.has(1) // true
set.clear() // Set [] 移除Set对象内的所有元素。

var set2 = new Set('abc') // Set ['a', 'b', 'c']

set2.forEach(el => console.log(el)) // a b c
set2.size // 3

