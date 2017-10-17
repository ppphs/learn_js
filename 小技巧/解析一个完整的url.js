/**
 * {
 *  href: '包含完整的url',
 *  origin: '包含协议到pathname之前的内容',
 *  protocol: 'url使用的协议，包含末尾的:',
 *  host: '完整主机名，包含:和端口',
 *  hostname: '主机名，不包含端口'
 *  port: '端口号',
 *  pathname: '服务器上访问资源的路径/开头',
 *  search: 'query string，?开头',
 *  hash: '#开头的锚'
 * }
 */
function parseUrl(url) {
  var result = {}
  var keys = ['href', 'origin', 'protocol', 'host', 'hostname', 'port', 'pathname', 'search', 'hash']
  var i, len
  /**
   * ([^:]+:) https:
   * ([^:\/\?#]+) 匹配非:/?#其他的字符串一次或多次
   * (:\d+)? 匹配端口号类似:8080零次或一次
   * (\/[^?#]*)? 匹配/path1/path2...零次或一次
   * (\?[^#]*)? 匹配?开头的查询字符串零次或一次
   * (#.*)? 匹配#后跟的锚点零次或一次
   */
  var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/

  var match = url.match(regexp) // 这里返回的数组中如果捕获组中没有匹配到的项目就会是undefined

  if (match) {
    for (var i = 0, len = match.length; i < len; i++) {
      result[keys[i]] = match[i] ? match[i] : ''
    }
  }
  return result
}

parseUrl('https://github.com/ppphs/learn_js#aaa')