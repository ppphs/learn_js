// 判断有没有类名
function hasClass (el, className) {
  let reg = new RegExp(`(^|\\s)${className}(\\s|$)`) // 因为这里是字符串形式要写出一个字符串\s必须把\用\给转义了，不然'\s'输出的是's'
  return reg.test(el.className)
}

// 添加类
function addClass (el, className) {
  if (hasClass(el, className)) {
    return // 已经有类名了直接返回
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}