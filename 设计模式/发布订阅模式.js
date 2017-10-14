/*
  简单的发布订阅
*/

function MyEvent () {
  this.chache = {}
}

MyEvent.prototype.listen = function (key, fn) {
  if (!this.chache[key]) {
    this.chache[key] = []
  }

  this.chache[key].push(fn)
}

MyEvent.prototype.trigger = function () {
  let key = Array.prototype.shift.apply(arguments)
  let fns = this.chache[key]

  if (!fns || fns.length === 0) {
    return
  }

  let len = fns.length
  for (let i = 0; i < len; i++) {
    fns[i].apply(this, arguments)
  }
}

MyEvent.prototype.remove = function (key, fn) {
  let fns = this.chache[key]
  let len = fns.length

  if (!fns) {
    return
  }

  if (!fn) {
    fns.length = 0
  }

  for (let i = 0; i < len; i++) {
    if (fns[i] === fn) {
      fns.splice(i, 1)
    }
  }
}

var seller = new MyEvent()

function xiaopeng (price) {
  console.log(`小彭的80平方米的房子开售了，价格是：${ price }`)
}

function xiaoyao (price) {
  console.log(`小姚的100平方米的房子开售了，价格是：${ price }`)
}

seller.listen('80平方米的房子', xiaopeng)

seller.listen('100平方米的房子', xiaoyao)

seller.remove('80平方米的房子', xiaopeng)
seller.trigger('80平方米的房子', 1000000)
seller.trigger('100平方米的房子', 1500000)
