var str = '我是{name}，我的工作是{job}'

var person = {
  name: 'joe',
  job: '前端工程师'
}

function fill (str, person) {
  for (property in person) {
    str = str.replace(`{${property}}`, person[property])
  }
  return str
}

console.log(fill(str, person))