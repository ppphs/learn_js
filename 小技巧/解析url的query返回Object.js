// 假设query string使用application/x-www-form-urlencoded编码

function parseQuery (query) {
  let result = {}
  if (typeof query !== 'string') {
    return result
  }
  if (query.indexOf('?') === 0) {
    query = query.slice(1)
  }
  let queryArr = query.split('&')
  for (let el of queryArr) {
    let keyValueArr = el.split('=')
    // application/x-www-form-urlencoded编码会将' '转换为+
    let key = decodeURIComponent(keyValueArr[0]).replace('+', ' ')
    let value = decodeURIComponent(keyValueArr[1]).replace('+', ' ')
    if (!(key in result)) { // key第一次出现直接添加
      result[key] = value
    } else if (Array.isArray(result[key])) {
      result[key].push(value)
    } else { // key第二次出现的时候把value的值变为数组
      result[key] = [result[key]]
      result[key].push(value)
    }
  }
  return result
}

console.log(parseQuery('?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8&ion=2')) // Object { sourceid: "chrome-instant", ion: Array[2], espv: "2", ie: "UTF-8" }