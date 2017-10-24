function getQueryStringArgs () {
  let queryStr = location.search.length > 0 ? location.search.slice(1) : '',
    items = queryStr.length ? queryStr.split('&') : [],
    args = {}

  for (let i = 0, len = items.length; i < len; i++) {
    let tempArr = items[i].split('='),
      key = tempArr[0],
      value = tempArr[1]
    if (!(key in args)) {
      args[key] = value
    } else if (args[key] instanceof Array) {
      args[key].push(value)
    } else {
      args[key] = [args[key]]
    }
  }
  return args
}

console.log(getQueryStringArgs())