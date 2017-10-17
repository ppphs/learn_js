const EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) { // DOM2级事件处理
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) { // IE事件处理
      element.attachEvent('on' + type, handler)
    } else {
      element['on' + type] = handler
    }
  },
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) { // DOM2级事件处理
      element.removeEventListener(type, handler, false)
    } else if (element.detachEvent) { // IE事件处理
      element.detachEvent('on' + type, handler)
    } else {
      element['on' + type] = null
    }
  }
}

/**
 * 事件对象e
 *  1、e.bubbles 表明事件是否冒泡
 *  2、e.cancelable 表明是否可以取消事件的默认行为，只有e.cancelable = true的时候才能设置preventDefault()来取消默认行为
 *  3、e.currentTarget 事件处理函数当前正在处理的元素
 *  4、e.defaultPrevented 如果为true表示已经调用了e.preventDefault()
 *  5、e.detial 与事件相关的细节信息
 *  6、e.eventPhase 处于事件处理程序的阶段：1表示捕获阶段、2表示“处于目标”、3表示冒泡阶段
 *  7、e.preventDefault() 取消事件默认行为
 *  8、e.stopPropagation() 取消进一步冒泡或捕获行为
 *  9、e.target 事件的目标
 *  10、e.type 被触发的事件类型
 *  11、e.view 与事件关联的抽象视图
 * 
 * 兼容性：
 *  取消冒泡：
 *    1、w3c为：e.stopPropagation()
 *    2、IE为：e.cancelBubble = true
 * 
 *  取消默认行为：
 *    1、w3c为：e.preventDefault()
 *    2、IE为：e.returnValue = false
 *    3、在比如onclick中使用return false来阻止默认行为
 * 
 *  解绑：
 *    1、w3c为：element.removeEventListener(type, handler, false)
 *    2、IE为：element.detachEvent('on' + type, handler)
 *    3、element.onclick = null
 * 
 *  触发事件对象：
 *    1、w3c：e.target
 *    2、IE：e.srcElement
 *
 *  this:
 *    1、w3c：this指向绑定事件的element
 *    2、IE：指向window对象
 */