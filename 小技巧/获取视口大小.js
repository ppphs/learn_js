function getViewportSize() {
  // IE9及标准浏览器中可使用此标准方法
  if ('innerHeight' in window) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  // IE 8及以下浏览器在标准模式下
  if (document.compatMode === 'CSS1Compat') {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }

  // IE8及以下浏览器在怪癖模式下
  return {
    width: document.body.clientWidth,
    height: document.body.clientHeight
  }
}