/*
  策略模式，验证表单
*/

var myForm = document.querySelector('#myForm')

var strategies = { // 策略对象
  isNotEmpty: function (value, errorMsg) {
    if (!value) {
      return errorMsg
    }
  }, 
  isRightMobile: function (value, errorMsg) {
    if (!(/(^1[3|8|5][0-9]{9}$)/.test(value))) {
      return errorMsg
    }
  },
  minLength: function (value, minLength, errorMsg) {
    if (value.length < minLength) {
      return errorMsg
    }
  }
}

function Validator () {
  this.cache = []
}

Validator.prototype.add = function (dom, strategiesArr) {
  var _self = this
  strategiesArr.forEach(function (item) {
    _self.cache.push(function () {
      var arr = item.strategy.split(':')
      var strategy = arr.shift()
      arr.unshift(dom.value)
      arr.push(item.errorMsg)
      return strategies[strategy].apply(dom, arr)
    })
  })
}

Validator.prototype.start = function () {
  for (var i = 0, item; item = this.cache[i]; i++) {
    var errorMsg = item()
    if (errorMsg) {
      return errorMsg
    }
  }
}

function validatorFnc () {
  var validator = new Validator()

  validator.add(myForm.userName, [{strategy: 'isNotEmpty', errorMsg: '用户名不能为空'}, {strategy: 'minLength:6', errorMsg: '用户名不能少于6位'}])
  validator.add(myForm.password, [{strategy: 'isNotEmpty', errorMsg: '密码不能为空'}, {strategy: 'minLength:8', errorMsg: '密码不能少于8位'}])
  validator.add(myForm.mobilePhone, [{strategy: 'isRightMobile', errorMsg: '输入的手机号不正确'}])

  return validator.start()
}

myForm.addEventListener('submit', function (e) {
  var errorMsg = validatorFnc()
  if (errorMsg) {
    alert(errorMsg)
    e.preventDefault()
    // return false // 注意这里return false没用，要像下面那样绑定事件才行
  }
}, false)

// myForm.onsubmit = function () {
//   var errorMsg = validatorFnc()
//   if (errorMsg) {
//     alert(errorMsg)
//     return false
//   }
// }
