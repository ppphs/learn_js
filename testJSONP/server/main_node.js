var express = require("express")
var path = require('path')
var app = express()


app.use(express.static('../'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'get')
  res.header('Access-Control-Allow-Credentials', 'true')
  next() // 执行下一个中间件
})


app.get('/jsonp', (req, res) => {
  let data = null,
      {callback} = req.query

  switch (callback) {
    case 'phs':
      // data = {name: '彭洪晟', loever: '姚淑婷'}
      break

    case 'yst':
      // data = {name: '姚淑婷', loever: '彭洪晟'}
      break

    default:
      data = {}
  }

  res.status(200).send(`${ callback }(${ JSON.stringify(data) })`)
})

app.get('/gethtml', (req, res) => {

  res.status(200).sendFile(path.join(__dirname, './test_send_html.html'))

})

app.get('/cors', (req, res) => {

  res.status(200).send('cors跨域成功啦！')

})

app.post('/formPost', (req, res) => {
  res.status(200).send('成功收到表单信息')
})

app.use((req, res, next) => { // 这个要放到最后不然前面的路由都会被这个拦截
  res.status(404).sendFile(path.join(__dirname, '404.html'))
})

app.listen(8080, () => {
  console.log('App is listening at port 8080')
})