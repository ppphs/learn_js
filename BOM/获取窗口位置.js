window.addEventListener('resize', function (e) {
  let left = typeof window.screenLeft === 'number' ? window.screenLeft : window.screenX
  let top = typeof window.screenTop === 'number' ? window.screenTop : window.screenY
}, false)