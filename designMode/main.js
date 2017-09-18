/*
  单例模式
*/

// function getSingle (fn) {
//   var result = null
//   return function () {
//     return result ? result : result = fn.apply(this, arguments)
//   }
// }

// function creatInstance () {
//   return new Object();
// }

// var getOneInstance = getSingle(creatInstance);

// console.log(getOneInstance() === getOneInstance()); // 返回true两次返回的都是同一个实例

/*
  策略模式，验证表单
*/

// var myForm = document.querySelector('#myForm')

// var strategies = {
//   isNotEmpty: function (value, errorMsg) {
//     if (!value) {
//       return errorMsg
//     }
//   }, 
//   isRightMobile: function (value, errorMsg) {
//     if (!(/(^1[3|8|5][0-9]{9}$)/.test(value))) {
//       return errorMsg
//     }
//   },
//   minLength: function (value, minLength, errorMsg) {
//     if (value.length < minLength) {
//       return errorMsg
//     }
//   }
// }

// function Validator () {
//   this.cache = []
// }

// Validator.prototype.add = function (dom, strategiesArr) {
//   var _self = this
//   strategiesArr.forEach(function (item) {
//     _self.cache.push(function () {
//       var arr = item.strategy.split(':')
//       var strategy = arr.shift()
//       arr.unshift(dom.value)
//       arr.push(item.errorMsg)
//       return strategies[strategy].apply(dom, arr)
//     })
//   })
// }

// Validator.prototype.start = function () {
//   for (var i = 0, item; item = this.cache[i]; i++) {
//     var errorMsg = item()
//     if (errorMsg) {
//       return errorMsg
//     }
//   }
// }

// function validatorFnc () {
//   var validator = new Validator()

//   validator.add(myForm.userName, [{strategy: 'isNotEmpty', errorMsg: '用户名不能为空'}, {strategy: 'minLength:6', errorMsg: '用户名不能少于6位'}])
//   validator.add(myForm.password, [{strategy: 'isNotEmpty', errorMsg: '密码不能为空'}, {strategy: 'minLength:8', errorMsg: '密码不能少于8位'}])
//   validator.add(myForm.mobilePhone, [{strategy: 'isRightMobile', errorMsg: '输入的手机号不正确'}])

//   return validator.start()
// }

// myForm.addEventListener('submit', function (e) {
//   var errorMsg = validatorFnc()
//   if (errorMsg) {
//     alert(errorMsg)
//     e.preventDefault()
//     // return false // 注意这里return false没用，要像下面那样绑定事件才行
//   }
// }, false)

// myForm.onsubmit = function () {
//   var errorMsg = validatorFnc()
//   if (errorMsg) {
//     alert(errorMsg)
//     return false
//   }
// }

/*
  代理模式（实现图片预加载）
*/

// var myImg = (function () {
//   var imgNode = document.createElement('img')
//   document.body.appendChild(imgNode)

//   return {
//     setSrc: function (src) {
//       imgNode.src = src
//     }
//   }
// })()

// var proxyImg = (function () {
//   var proxyImgObj = new Image()
//   proxyImgObj.onload = function () {
//     myImg.setSrc(proxyImgObj.src)
//   }

//   return {
//     setSrc: function (src) {
//       myImg.setSrc('./image/timg.jpg')
//       proxyImgObj.src = src
//     }
//   }
// })()

// proxyImg.setSrc('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1793555670,2726033397&fm=26&gp=0.jpg')

/*
  迭代器模式
*/

// let Iterator = function (obj) {
//   let current = 0

//   let next = function () {
//     current++
//   }

//   let isDone = function () {
//     return current >= obj.length
//   }

//   let getCurrItem = function () {
//     return obj[current]
//   }

//   return {
//     next,
//     isDone,
//     getCurrItem
//   }
// }

// let simpleCompare = function (iterator1, iterator2) {

//   while ( !iterator1.isDone() || !iterator2.isDone() ) {
//     if (iterator1.getCurrItem() !== iterator2.getCurrItem()) {
//       return false
//     }
//     iterator1.next()
//     iterator2.next()
//   }
//   return true
// }

// let iterator1 = Iterator([1, 2, 3])
// let iterator2 = Iterator([1, 2, 3, 4])

// console.log(simpleCompare(iterator1, iterator2))

/*
  简单的发布订阅
*/

// function MyEvent () {
//   this.chache = {}
// }

// MyEvent.prototype.listen = function (key, fn) {
//   if (!this.chache[key]) {
//     this.chache[key] = []
//   }

//   this.chache[key].push(fn)
// }

// MyEvent.prototype.trigger = function () {
//   let key = Array.prototype.shift.apply(arguments)
//   let fns = this.chache[key]

//   if (!fns || fns.length === 0) {
//     return
//   }

//   let len = fns.length
//   for (let i = 0; i < len; i++) {
//     fns[i].apply(this, arguments)
//   }
// }

// MyEvent.prototype.remove = function (key, fn) {
//   let fns = this.chache[key]
//   let len = fns.length

//   if (!fns) {
//     return
//   }

//   if (!fn) {
//     fns.length = 0
//   }

//   for (let i = 0; i < len; i++) {
//     if (fns[i] === fn) {
//       fns.splice(i, 1)
//     }
//   }
// }

// var seller = new MyEvent()

// function xiaopeng (price) {
//   console.log(`小彭的80平方米的房子开售了，价格是：${ price }`)
// }

// function xiaoyao (price) {
//   console.log(`小姚的100平方米的房子开售了，价格是：${ price }`)
// }

// seller.listen('80平方米的房子', xiaopeng)

// seller.listen('100平方米的房子', xiaoyao)

// seller.remove('80平方米的房子', xiaopeng)
// seller.trigger('80平方米的房子', 1000000)
// seller.trigger('100平方米的房子', 1500000)

/*
  简单的命令模式 ( 就是把命令触发的方法先保存起来到时候一块执行或者是达到某个条件立即执行 )
*/

// let Rya = {
//   attack: function () {
//     console.log('攻击')
//   },
//   defense: function () {
//     console.log('防御')
//   },
//   jump: function () {
//     console.log('跳跃')
//   },
//   crouch: function () {
//     console.log('蹲下')
//   }
// }

// function makeCommand (receiver, state) {
//   return function () {
//     receiver[state]()
//   }
// }

// let commands = {
//   '119': 'jump', // w
//   '115': 'crouch', // s
//   '97': 'defense', // a
//   '100': 'attack' // d
// }

// let commandStack = []

// document.addEventListener('keypress', function (e) {
//   let keyCode = e.keyCode ? e.keyCode : e.which, // 火狐e.keyCode始终为0，要用e.which代替
//       command = makeCommand(Rya, commands[keyCode])
//       console.log(keyCode)

//   if (command) {
//     command()
//     commandStack.push(command)
//   }
// }, false)

// document.querySelector('#playback').onclick = function () {
//   for (let i = 0, len = commandStack.length; i < len; i++) {
//     commandStack[i]()
//     commandStack.length = 0
//   }
// }

/*
  组合模式
*/

// function Folder (name) {
//   this.name = name
//   this.files = []
//   this.parent = null
// }

// Folder.prototype.add = function (file) {
//   file.parent = this
//   this.files.push(file)
// }

// Folder.prototype.scan = function () {
//   console.log(`开始扫描${ this.name }文件夹`)

//   for (let i = 0; file = this.files[i]; i++) {
//     file.scan()
//   }
// }

// Folder.prototype.remove = function () {
//   if (!this.parent) { //根节点或者树外的游离节点
//     return;
//   }
//   for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
//     let file = files[l];
//     if (file === this) {
//       files.splice(l, 1);
//     }
//   }
// }

// function File (name) {
//   this.name = name
//   this.parent = null
// }

// File.prototype.add = function () {
//   throw new Error('文件下面不允许添加文件！')
// }

// File.prototype.scan = function () {
//   console.log(`扫描到了文件：${ this.name }`)
// }

// let folder = new Folder('学习资料')
// let folder1 = new Folder('JavaScript')
// let folder2 = new Folder ('jQuery')
// let file1 = new File('JavaScript 设计模式与开发实践')
// let file2 = new File('精通 jQuery')
// let file3 = new File('重构与模式')

// folder1.add(file1)
// folder2.add(file2)
// folder.add(folder1)
// folder.add(folder2)
// folder.add(file3)

// folder.scan()

/*
  模板方法模式
*/

// let Beverage = function () {}

// Beverage.prototype.boliWater = function () {
//   console.log('把水煮沸')
// }

// Beverage.prototype.brew = function () {throw new Error('子类必须重写此方法')}

// Beverage.prototype.pourInCup = function () {throw new Error('子类必须重写此方法')}

// Beverage.prototype.addCondiments = function () {throw new Error('子类必须重写此方法')}

// Beverage.prototype.customerWantsCondiments = function () {return true}

// Beverage.prototype.init = function () {
//   this.boliWater()
//   this.brew()
//   this.pourInCup()
//   if (this.customerWantsCondiments()) {
//     this.addCondiments()
//   }
// }

// let Coffee = function () {}

// Coffee.prototype = new Beverage()

// Coffee.prototype.brew = function () {
//   console.log('用沸水冲泡咖啡')
// }

// Coffee.prototype.pourInCup = function () {
//   console.log('把咖啡倒进杯子')
// }

// Coffee.prototype.addCondiments = function () {
//   console.log('加糖和牛奶')
// }

// Coffee.prototype.customerWantsCondiments = function () {
//   return window.confirm('需要加调味品吗？')
// }

// let coffee = new Coffee()
// coffee.init()

// let Tea = function () {}

// Tea.prototype = new Beverage()

// Tea.prototype.brew = function () {
//   console.log('用沸水浸泡茶叶')
// }

// Tea.prototype.pourInCup = function () {
//   console.log('把茶倒进杯子')
// }

// Tea.prototype.addCondiments = function () {
//   console.log('加柠檬')
// }

// Tea.prototype.customerWantsCondiments = function () {
//   return window.confirm('需要加调味品吗？')
// }

// let tea = new Tea()
// tea.init()

