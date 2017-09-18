// function Promise(executor) {
//   var self = this
//   self.status = 'pending' // Promise当前的状态
//   self.data = undefined  // Promise的值
//   self.onResolvedCallback = [] // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
//   self.onRejectedCallback = [] // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面

//   function resolve(value) {
//     if (self.status === 'pending') {
//       self.status = 'resolved'
//       self.data = value
//       for(var i = 0; i < self.onResolvedCallback.length; i++) {
//         self.onResolvedCallback[i](value)
//       }
//     }
//   }

//   function reject(reason) {
//     if (self.status === 'pending') {
//       self.status = 'rejected'
//       self.data = reason
//       for(var i = 0; i < self.onRejectedCallback.length; i++) {
//         self.onRejectedCallback[i](reason)
//       }
//     }
//   }

//   executor(resolve, reject) // 执行executor并传入相应的参数
// }

// Promise.prototype.then = function(onResolved, onRejected) {
//   var self = this
//   var promise2

//   // 根据标准，如果then的参数不是function，则我们需要忽略它，此处以如下方式处理
//   onResolved = typeof onResolved === 'function' ? onResolved : function(value) {return value}
//   onRejected = typeof onRejected === 'function' ? onRejected : function(reason) {throw reason}

//   if (self.status === 'resolved') {
//     // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用onResolved
//     // 因为考虑到有可能throw，所以我们将其包在try/catch块里
//     return promise2 = new Promise(function(resolve, reject) {
//       try {
//         var x = onResolved(self.data)
//         if (x instanceof Promise) { // 如果onResolved的返回值是一个Promise对象，直接取它的结果做为promise2的结果
//           x.then(resolve, reject) // 这里是把x promis的.data挂载到return promise2这个promise上
//         }
//         resolve(x) // 否则，以它的返回值做为promise2的结果
//       } catch (e) {
//         reject(e) // 如果出错，以捕获到的错误做为promise2的结果
//       }
//     })
//   }

//   // 此处与前一个if块的逻辑几乎相同，区别在于所调用的是onRejected函数，就不再做过多解释
//   if (self.status === 'rejected') {
//     return promise2 = new Promise(function(resolve, reject) {
//       try {
//         var x = onRejected(self.data)
//         if (x instanceof Promise) {
//           x.then(resolve, reject)
//         }
//       } catch (e) {
//         reject(e)
//       }
//     })
//   }

//   if (self.status === 'pending') {
//   // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
//   // 只能等到Promise的状态确定后，才能确实如何处理。
//   // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
//   // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
//     return promise2 = new Promise(function(resolve, reject) {
//       self.onResolvedCallback.push(function(value) {
//         try {
//           var x = onResolved(self.data)
//           if (x instanceof Promise) {
//             x.then(resolve, reject)
//           }
//         } catch (e) {
//           reject(e)
//         }
//       })

//       self.onRejectedCallback.push(function(reason) {
//         try {
//           var x = onRejected(self.data)
//           if (x instanceof Promise) {
//             x.then(resolve, reject)
//           }
//         } catch (e) {
//           reject(e)
//         }
//       })
//     })
//   }
// }

try {
  module.exports = Promise
} catch (e) {console.log(e)}

function Promise(executor) {
  var self = this

  self.status = 'pending'
  self.onResolvedCallback = []
  self.onRejectedCallback = []

  function resolve(value) {
    if (value instanceof Promise) {
      return value.then(resolve, reject)
    }
    setTimeout(function() { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'resolved'
        self.data = value
        for (var i = 0; i < self.onResolvedCallback.length; i++) {
          self.onResolvedCallback[i](value)
        }
      }
    })
  }

  function reject(reason) {
    setTimeout(function() { // 异步执行所有的回调函数
      if (self.status === 'pending') {
        self.status = 'rejected'
        self.data = reason
        for (var i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](reason)
        }
      }
    })
  }

  try {
    executor(resolve, reject)
  } catch (reason) {
    reject(reason)
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  var then
  var thenCalledOrThrow = false

  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise!'))
  }

  if (x instanceof Promise) {
    if (x.status === 'pending') { //because x could resolved by a Promise Object
      x.then(function(v) {
        resolvePromise(promise2, v, resolve, reject)
      }, reject)
    } else { //but if it is resolved, it will never resolved by a Promise Object but a static value;
      x.then(resolve, reject)
    }
    return
  }

  if ((x !== null) && ((typeof x === 'object') || (typeof x === 'function'))) {
    try {
      then = x.then //because x.then could be a getter
      if (typeof then === 'function') {
        then.call(x, function rs(y) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return resolvePromise(promise2, y, resolve, reject)
        }, function rj(r) {
          if (thenCalledOrThrow) return
          thenCalledOrThrow = true
          return reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (thenCalledOrThrow) return
      thenCalledOrThrow = true
      return reject(e)
    }
  } else {
    resolve(x)
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  var self = this
  var promise2
  onResolved = typeof onResolved === 'function' ? onResolved : function(v) {
    return v
  }
  onRejected = typeof onRejected === 'function' ? onRejected : function(r) {
    throw r
  }

  if (self.status === 'resolved') {
    return promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() { // 异步执行onResolved
        try {
          var x = onResolved(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }

  if (self.status === 'rejected') {
    return promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() { // 异步执行onRejected
        try {
          var x = onRejected(self.data)
          resolvePromise(promise2, x, resolve, reject)
        } catch (reason) {
          reject(reason)
        }
      })
    })
  }

  if (self.status === 'pending') {
    // 这里之所以没有异步执行，是因为这些函数必然会被resolve或reject调用，而resolve或reject函数里的内容已是异步执行，构造函数里的定义
    // 如果当前的Promise还处于pending状态，我们并不能确定调用onResolved还是onRejected，
    // 只能等到Promise的状态确定后，才能确实如何处理。
    // 所以我们需要把我们的**两种情况**的处理逻辑做为callback放入promise1(此处即this/self)的回调数组里
    // 逻辑本身跟第一个if块内的几乎一致，此处不做过多解释
    return promise2 = new Promise(function(resolve, reject) {
      self.onResolvedCallback.push(function(value) {
        try {
          var x = onResolved(value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })

      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch (r) {
          reject(r)
        }
      })
    })
  }
}

Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

Promise.deferred = Promise.defer = function() {
    var dfd = {}
    dfd.promise = new Promise(function(resolve, reject) {
      dfd.resolve = resolve
      dfd.reject = reject
    })
    return dfd
}
// var pro1 = new Promise((resolve, reject) => {
//   console.log('promise执行');
//   resolve('结果');
// });
// console.log(pro1);
// pro1.then((r) => {
//   console.log(`then执行，传递来的数据是 ${r}`);
//   return new Promise((resolve, rj) => {
//     resolve('pro1.then返回的pormise')
//   })
// }, (reject) => {
//   console.log(`then执行，传递来的数据是${reject}`)
// }).then((data) => {
//   console.log('.then.then传递的数据', data)
// });
// console.log('promise后面的语句执行')

var pro1 = new Promise((resolve, reject) => {
  console.log('promise执行');
  setTimeout(() => {
    resolve('结果');
  }, 3000)
});
console.log(pro1);
pro1.then((r) => { // .then返回的promise的resolve()是靠里面return的promise调用的
  console.log(`then执行，传递来的数据是 ${r}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('pro1.then返回的结果');
    }, 3000);
  });
}).then((data) => {
  console.log('.then.then传递的数据', data)
});
console.log('promise后面的语句执行')