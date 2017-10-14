/*
  代理模式（实现图片预加载）
*/

var myImg = (function () {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)

  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()

var proxyImg = (function () {
  var proxyImgObj = new Image()
  proxyImgObj.onload = function () {
    myImg.setSrc(proxyImgObj.src)
  }

  return {
    setSrc: function (src) {
      myImg.setSrc('./image/timg.jpg')
      proxyImgObj.src = src
    }
  }
})()

proxyImg.setSrc('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1793555670,2726033397&fm=26&gp=0.jpg')
