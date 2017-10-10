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