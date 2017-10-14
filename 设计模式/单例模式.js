/*
  单例模式
*/

function getSingle (fn) {
  var result = null
  return function () {
    return result ? result : result = fn.apply(this, arguments)
  }
}

function creatInstance () {
  return new Object();
}

var getOneInstance = getSingle(creatInstance);

console.log(getOneInstance() === getOneInstance()); // 返回true两次返回的都是同一个实例