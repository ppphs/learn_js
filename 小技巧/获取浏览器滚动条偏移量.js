function getScrollOffset () {
  // IE9以上及现代标准浏览器
  if (window.scrollY) {
    return {
      x: window.scrollX,
      y: window.scrollY
    }
  }

  // 老版本IE标准模式
  if (document.compatMode === 'CSS1Compat') {
    return {
      x: document.documentElement.scrollLeft,
      y: document.documentElement.scrollTop
    }
  }

  // 老版本IE怪异模式
  return {
    x: document.body.scrollLeft,
    y: document.body.scrollTop
  }
}