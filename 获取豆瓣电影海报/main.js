let fs = require('fs')
let path = require('path')
let request = require('request')
let async = require('asyncawait/async') // node目前不支持async和await所以引进asyncawait库
let await = require('asyncawait/await')

var movieDir = __dirname + '/movies',
	exts = ['.mkv', '.avi', '.mp4', '.rm', '.rmvb', '.wmv']

// 读取文件列表
var readFilesName = function () {
	return new Promise(function (resolve, reject) {
		fs.readdir(movieDir, function (err, files) {
			resolve(files.filter((v) => exts.includes(path.parse(v).ext))) // 获取文件夹里的文件名字并且提取出他们的后缀判断是否在预先设定好的后缀列表中，返回一个新数组包含预设后缀名列表里面有的文件
		})
	})
}

// 获取海报
var getPosterUrl = function (movieName) {
	let url = `https://api.douban.com/v2/movie/search?q=${encodeURIComponent(movieName)}` // 简单理解encodeURIComponent用在查询字符串编码上；encodeURI用在整个URI的

	return new Promise(function (resolve, reject) {
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) return reject(error)

			resolve(body.subjects[0].images.large) // 豆瓣接口返回的json里面subjects[0].images.large为大图url
		})
	})
}

// 保存海报
var savePoster = function (movieName, url) {
	request.get(url).pipe(fs.createWriteStream(path.join(movieDir, movieName + '.jpg'))) // 写入movies文件夹
}

let myAsync = async( function () {
  // let files = await readFilesName()
  let files = ['羞羞的铁拳.mkv', '真爱至上.mkv']

	// await只能使用在原生语法
	for (var file of files) {
    let name = path.parse(file).name // 解析出地址对象例如：
    // { 
    //   root: '',
    //   dir: '',
    //   base: '羞羞的铁拳.mkv',
    //   ext: '.mkv',
    //   name: '羞羞的铁拳' 
    // }

		console.log(`正在获取【${name}】的海报`)
		savePoster( name, await( getPosterUrl(name) ) )
	}

	console.log('=== 获取海报完成 ===')
} )
myAsync()