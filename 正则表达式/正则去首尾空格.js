var str = '  abc  '

var myTrim = function (str) {
  return str.replace(/^\s*(\w*)\s*$/g, function (str, $1) {
    return $1
  })

  // 方法二
  // return str.replace(/^\s*|\s*$/g, '')
}

console.log(myTrim(str))