function fn () {
  {
    let args = Array.prototype.slice.call(arguments)
    console.log(args)
  }
  {
    let args = [].slice.call(arguments)
    console.log(args)
  }
  {
    let args = Array.prototype.concat.call([], arguments)
    console.log(args)
  }
  {
    let args = []
    Array.prototype.push.apply(args, arguments)
    console.log(args)
  }
  {
    let args = [...arguments]
    console.log(args)
  }
  {
    let args = Array.from(arguments)
    console.log(args)
  }
}

fn(1, 2, 3)