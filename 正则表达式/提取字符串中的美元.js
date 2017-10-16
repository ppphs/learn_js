var str = '我有$1,230,400.50这么多钱'

// str.match(/\$\d+(,\d{3})*(\.\d+)?/g) 这里正则使用了g，所以匹配结果数组只含全部匹配项目不含捕获组
str = parseFloat(str.match(/\$\d+(,\d{3})*(\.\d+)?/g).join('').replace(/[\$,]/g, ''))

console.log(str)