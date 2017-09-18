function createXHR () {
  if (typeof XMLHttpRequest != "undefined") {
    return new XMLHttpRequest();
  }else {
    throw new Error("没有XHR对象！或者使用的是IE7以下的版本浏览器");
  }
}

var xhr = createXHR();
var div = document.getElementById("AjaxText");

xhr.onreadystatechange = function () {  
  if (xhr.readState == 4) {
    if((xhr.status>=199 && xhr.status <300) || xhr.status ==304) {
      alert(xhr.responseText);
    }else{
      alert(xhr.status);
    }
  }
};  

xhr.open("GET","AjaxTest.json", true);
xhr.send(null);


function foo () {
  this.age = 20;
}
function goo () {
  var i = 1;
  this.name = '阿萨德';
}

foo.prototype = new goo ();
var foo = new foo ();
console.log(foo.name);
console.log(foo.age);
console.log(foo.i);