var proxy = new Proxy({name: 'joe'}, {
  get (target, propKey, receiver) {
    console.log('target', target) // Object { name: "joe" }
    console.log('propKey', propKey) // name
    console.log('receiver', receiver) // Proxy { <target>: Object, <handler>: Object }
  }
})

proxy.name

// 数组负索引 get

function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey)
      if (index < 0) {
        propKey = String(target.length + index)
      }
      return Reflect.get(target, propKey, receiver) // Reflect.get就相当于target[propKey]，只不过是通过函数形式来实现，receiver：如果遇到 getter，此值将提供给目标调用。
    }
  }

  let target = []
  target.push(...elements)
  return new Proxy(target, handler) // 这里new Proxy(target, handler) === receiver
}

let arr = createArray('a', 'b', 'c')
arr[-1] // c

// set

var handler = {
  set: function(obj, prop, value, receiver) {
    obj[prop] = receiver
  }
}
var proxy = new Proxy({}, handler)
proxy.foo = 'bar'
proxy.foo === proxy // true

// 用Proxy实现验证
function validator (target, validator) {
  return new Proxy(target, {
    _validator: validator,
    set (target, key, value, proxy) {
      if (target.hasOwnProperty(key)) {
        let va = this._validator[key]
        if (!!va(value)) {
          return Reflect.set(target, key, value, proxy)
        } else {
          throw new Error(`不能设置 ${key} 为 ${value}`)
        }
      } else {
        throw new Error(`${key} 不存在`)
      }
    }
  })
}

const personValidators = {
  name (val) {
    return typeof val === 'string'
  },
  age (val) {
    return typeof val === 'number' && val >= 18
  }
}

class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
    return validator(this, personValidators)
  }
}

const person = new Person('joe', 20)
console.log(person)
person.age = 16 // Error
console.log(person)
person.name = 'abc' // 后面不执行
console.log(person)
