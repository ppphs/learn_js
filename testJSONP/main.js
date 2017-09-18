function createScript (url) {
  let _script = document.createElement('script')

  _script.src = url

  document.querySelector('head').appendChild(_script)
}

function phs (data) {
  console.log(data)
}

window.onload = function () {
  createScript('http://localhost:8080/jsonp?callback=phs')
}

var XHR = new XMLHttpRequest()

// XHR.withCredentials = true

XHR.onreadystatechange = function () {
  if (XHR.readyState == 4) {
    if ((XHR.status >= 200 && XHR.status < 300) || (XHR.status == 304)) {
      console.log(XHR.responseText)
    } else {
      console.error('Request was unsuccessful ' + XHR.status)
    }
  }
}

XHR.open("get", "http://localhost:8080/cors", true)

XHR.send(null)