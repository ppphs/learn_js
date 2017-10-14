/*
  模板方法模式
*/

let Beverage = function () {}

Beverage.prototype.boliWater = function () {
  console.log('把水煮沸')
}

Beverage.prototype.brew = function () {throw new Error('子类必须重写此方法')}

Beverage.prototype.pourInCup = function () {throw new Error('子类必须重写此方法')}

Beverage.prototype.addCondiments = function () {throw new Error('子类必须重写此方法')}

Beverage.prototype.customerWantsCondiments = function () {return true}

Beverage.prototype.init = function () {
  this.boliWater()
  this.brew()
  this.pourInCup()
  if (this.customerWantsCondiments()) {
    this.addCondiments()
  }
}

let Coffee = function () {}

Coffee.prototype = new Beverage()

Coffee.prototype.brew = function () {
  console.log('用沸水冲泡咖啡')
}

Coffee.prototype.pourInCup = function () {
  console.log('把咖啡倒进杯子')
}

Coffee.prototype.addCondiments = function () {
  console.log('加糖和牛奶')
}

Coffee.prototype.customerWantsCondiments = function () {
  return window.confirm('需要加调味品吗？')
}

let coffee = new Coffee()
coffee.init()

let Tea = function () {}

Tea.prototype = new Beverage()

Tea.prototype.brew = function () {
  console.log('用沸水浸泡茶叶')
}

Tea.prototype.pourInCup = function () {
  console.log('把茶倒进杯子')
}

Tea.prototype.addCondiments = function () {
  console.log('加柠檬')
}

Tea.prototype.customerWantsCondiments = function () {
  return window.confirm('需要加调味品吗？')
}

let tea = new Tea()
tea.init()
