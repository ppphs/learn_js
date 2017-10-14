/*
  组合模式
*/

function Folder (name) {
  this.name = name
  this.files = []
  this.parent = null
}

Folder.prototype.add = function (file) {
  file.parent = this
  this.files.push(file)
}

Folder.prototype.scan = function () {
  console.log(`开始扫描${ this.name }文件夹`)

  for (let i = 0; file = this.files[i]; i++) {
    file.scan()
  }
}

Folder.prototype.remove = function () {
  if (!this.parent) { //根节点或者树外的游离节点
    return;
  }
  for (let files = this.parent.files, l = files.length - 1; l >= 0; l--) {
    let file = files[l];
    if (file === this) {
      files.splice(l, 1);
    }
  }
}

function File (name) {
  this.name = name
  this.parent = null
}

File.prototype.add = function () {
  throw new Error('文件下面不允许添加文件！')
}

File.prototype.scan = function () {
  console.log(`扫描到了文件：${ this.name }`)
}

let folder = new Folder('学习资料')
let folder1 = new Folder('JavaScript')
let folder2 = new Folder ('jQuery')
let file1 = new File('JavaScript 设计模式与开发实践')
let file2 = new File('精通 jQuery')
let file3 = new File('重构与模式')

folder1.add(file1)
folder2.add(file2)
folder.add(folder1)
folder.add(folder2)
folder.add(file3)

folder.scan()
