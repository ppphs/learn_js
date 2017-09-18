/*
  1、请给Array本地对象增加一个原型方法，它用于删除数组条目中重复的条目(可能有多个)，返回值是一个包含被删除的重复条目的新数组。
*/

// (function () {
//   Array.prototype.returnRepeated = function () {
//     let temp = {};
//     let newArr = this.filter(function (item) {
//       if (!temp[item]) {
//         temp[item] = 1;
//       } else {
//         return true;
//       }
//     })
//     return newArr;
//   }
//   console.log([1, 2, 1, 3, 4, 2, 3, 1, 'aaa', 'bbb', 'ccc', 'bbb', 'aaa'].returnRepeated()) //[1, 2, 3, 1, "bbb", "aaa"]
// })()

/*
  2、请填充代码，使mySort()能使传入的参数按照从小到大的顺序显示出来。
  function mySort() {
      var tags = new Array();//使用数组作为参数存储容器
      请补充你的代码
      return tags;//返回已经排序的数组
  }
   
  var result = mySort(50,11,16,32,24,99,57,100);/传入参数个数不确定
  console.info(result);//显示结果
*/

// (function () {
//    function mySort(...args) {
//       var tags = args.sort(function (item1, item2) {
//         return item1 - item2;
//       })
//       return tags;
//   }
   
//   var result = mySort(50,11,16,32,24,99,57,100);
//   console.info(result);
// })()

/*
  用javascript实现用户登录验证的代码。
  ( 有关用策略模式验证表单见设计模式与开发实践5.6.2节 )
*/

// (function () {
//   var userName = document.getElementById('userName');
//   var password = document.getElementById('password');
//   var form = document.forms[0];
//   form.addEventListener('submit', function (e) {
//     console.log(2);
//     console.log(1);
//     console.log(userName.value.indexOf('@'))
//     if (!userName.value) {
//       alert('请输入用户名');
//       return false;
//     } else if (userName.value.indexOf('@') < 0) {
//       alert('请输入正确的用户名');
//       return false;
//     } else if (!password.value) {
//       alert('请输入密码');
//       return false;
//     } else {
//       return true;
//     }
//   }, false);
// })()

/*
  斐波那契数列
*/

// (function () { //递归的方法时间复杂度太高了  不推荐
//   function getNthFibonacciArr (count) {
//     var arr = [];
//     for (var i = 0; i <= count; i++) {
//       arr.push(getNthFibonacci(i))
//     }
//     return arr
//   }
//   function getNthFibonacci (count) {
//     if (count === 0 || count === 1) {
//       return 1;
//     }
//     return getNthFibonacci(count - 1) + getNthFibonacci(count - 2);;
//   }
//   console.log(getNthFibonacciArr(5))
// })()

// function Fibonacci(n) { // 这个方法效率高一些 推荐
//     var t = [0, 1]
//     for (var i = 2; i < n + 1; i++ ) {
//         t[i] = t[i - 1] + t[i - 2]
//     }
//     return t[n]
// }

/*
   如下图，请实现表格信息的排序功能，当点击表头的属性区域，将表格信息进行排序切换功能，即第一次点击为降序排序，再一次点击进行升序排序。
   https://www.nowcoder.com/questionTerminal/bfaf16463f1d40178d8d2ad404a08c68
*/

// <!DOCTYPE html>
// <html>
// <head>
//     <title>sort table</title>
//     <meta charset="utf-8">
// <style type="text/css">
// *{
//     padding:0;
//     margin:0;
// }
// table tr td{
//     width:100px;
//     height:30px;
//     line-height:30px;
//     text-align:center;
// }
// </style>
// </head>
// <body>
// <table border="1" cellspacing="0" >
//     <tr style="background:#eee;">
//         <td>姓名</td>
//         <td>力量</td>
//         <td>敏捷</td>
//         <td>智力</td>
//     </tr>
//     <tr>
//         <td>德鲁伊</td>
//         <td>17</td>
//         <td>24</td>
//         <td>13</td>
//     </tr>
//     <tr>
//         <td>月之骑士</td>
//         <td>15</td>
//         <td>22</td>
//         <td>16</td>
//     </tr>
//     <tr>
//         <td>众神之王</td>
//         <td>19</td>
//         <td>15</td>
//         <td>20</td>
//     </tr>
//     <tr>
//         <td>流浪剑客</td>
//         <td>23</td>
//         <td>15</td>
//         <td>14</td>
//     </tr>
// </table>
// </body>
// <script type="text/javascript">
// var thead = document.getElementsByTagName("tr")[0];
// var td = thead.getElementsByTagName("td");
// for (var i = 0; i < td.length; i++) {    
//   td[i].index = i;
//   td[i].once_click = true;
//   td[i].onclick = function() {        
//     sortTable(this);    
//   };
// }
// var trlist = document.getElementsByTagName("tr");
// var table = document.getElementsByTagName("table")[0];

// function sortTable(attribute) {
//   console.log(attribute.index);
//   attribute.once_click = !attribute.once_click
//   var tr = Array.prototype.slice.call(trlist, 1);    
//   tr.sort(function(a, b) {        
//     var td1 = a.getElementsByTagName("td")[attribute.index].innerText;
//     var td2 = b.getElementsByTagName("td")[attribute.index].innerText;
//     if (!attribute.once_click) {
//       if (td1 * 1) {
//         return td2 - td1;
//       } else {
//         return td2 > td1 ? 1 : -1;
//       }
//     } else {
//       if (td1 * 1) {
//         return td1 - td2;
//       } else {
//         return td2 > td1 ? -1 : 1;
//       }
//     }
//   });
//       
//   table.innerHTML = "";    
//   table.appendChild(thead);    
//   for (var i = 0; i < tr.length; i++) {        
//     table.appendChild(tr[i]);    
//   }
// }
// </script>
// </html>

/*
  你作为一名出道的歌手终于要出自己的第一份专辑了，你计划收录 n 首歌而且每首歌的长度都是 s 秒，每首歌必须完整地收录于一张 CD 当中。每张 CD 的容量长度都是 L 秒，而且你至少得保证同一张 CD 内相邻两首歌中间至少要隔 1 秒。为了辟邪，你决定任意一张 CD 内的歌数不能被 13 这个数字整除，那么请问你出这张专辑至少需要多少张 CD ？ 
*/

// 个人算法：假如有一个cd可以放5首歌（X）每首歌是S秒，因为两首歌中间有1秒的间隙所以5首歌中间就有4秒的间隙（X - 1），列出一个等式是X * S + (X - 1) = L，得出一张cd可以放X = (L + 1) / (S + 1)首歌，因为每首歌都要完整所以要向下取整，再用总歌曲数目除以每张cd可以放的歌曲数目就得出要多少张cd了

// function cdCount (N, S, L) {
//     var one_CD_count = 0;
//     var temp = Math.floor(( L + 1 ) / ( S + 1 );
//     if ((temp) % 13 === 0) {
//         one_CD_count = temp - 1;
//     } else {
//         one_CD_count = temp;
//     }
//     return Math.ceil(N / one_CD_count);
// }

/*
  现在有一个字符串，你要对这个字符串进行 n 次操作，每次操作给出两个数字：(p, l) 表示当前字符串中从下标为 p 的字符开始的长度为 l 的一个子串。你要将这个子串左右翻转后插在这个子串原来位置的正后方，求最后得到的字符串是什么。字符串的下标是从 0 开始的，你可以从样例中得到更多信息。 
  输入：ab
        2
        0 2
        1 3
  输出：abbaabb
*/
// function disposeStr (str, index, len) {
//   var temp = str.slice(index, index + len)
//   var temp1 = str.slice(index + len)
//   var reverseStr = temp.split('').reverse().join('');
  
//   return = str.replace(temp1, reverseStr + temp1)
// }
// function execute (...rest) {
//   var str_temp = disposeStr(rest[0], rest[1][0], rest[1][1])
//   for (var i = 2, len = rest.length; i < len; i++) {
//     str_temp = disposeStr(str_temp, rest[i][0], rest[i][1])
//   }
//   return str_temp;
// }

// console.log(execute('1QEjTeEpG6', [8, 0], [5, 1], [5, 5], [9, 3], [6, 7], [2, 17], [3, 25], [47, 7], [7, 18]));

/*
  深拷贝
*/

// function deepCopy (target, option) {
//   let copy_prop,
//       obj = target || {}

//   for (let i in option) {
//     copy = option[i]

//     if (target === copy) {
//       continue
//     }

//     if (typeof copy === 'object') {
//       target[i] = copy instanceof Array ? [] : {}
//       deepCopy(target[i], copy)
//     } else {
//       target[i] = copy
//     }
//   }
//   return target;
// }

// var target = {}
// var option = {name: 'joe', age: 20, empty: {}, lover: {name: '姚淑婷', age: 20}}
// console.log(deepCopy(target, option))
// console.log(target.lover === option.lover)

// var target = []
// var option = ['joe', 20, ['姚淑婷', 20]]
// deepCopy(target, option)
// console.log(target[2] === option[2])

/*
  青蛙跳台阶
  一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
*/

// function jumpFloor(number)
// {
//     // write code here
//     if(number <= 2) return number;
//     var arr = [0,1,2];
//     for(var i = 3; i <= number; i++){
//         arr.push(arr[i-1] + arr[i-2]);
//     }
//     return arr.pop();
// }

/*
  一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。 
*/
// 这里用了递归的思想：每一个函数只处理自己能发生的事情，把剩下的数量继续交给下一个函数处理
// 这里 f(1) = 1
// f(2) = f(2-1) + f(2-2)         //f(2-2) 表示2阶台阶第一次跳了两阶。
// f(3) = f(3-1) + f(3-2) + f(3-3) 
// ...
// f(n) = f(n-1) + f(n-2) + f(n-3) + ... + f(n-(n-1)) + f(n-n)
// 每一次调用函数都只有自己能处理的次数
// 最后简化 
// f(n-1) = f(0) + f(1)+f(2)+f(3) + ... + f((n-1)-1) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2)
// f(n) = f(0) + f(1) + f(2) + f(3) + ... + f(n-2) + f(n-1) = f(n-1) + f(n-1)
// 可以得出：
// f(n) = 2*f(n-1)

// function jumpFloorII(number) {
//  if (number === 1)
//       return 1;
//   if (number === 2)
//       return 2;
//   return 2*jumpFloorII(number-1)
// }

/*
  数组方法变异（数组的方法代理）
*/

// const arrMethods = ['push', 'shift', 'pop', 'unshift', 'splice', 'slice', 'sort', 'reverse']
// const arrProxy = []

// arrMethods.map(method => {
//   const original = [][method]
//   arrProxy[method] = function (...rest) {
//     console.log('~~~~~ 被监听到了 ~~~~~')
//     return original.apply(this, rest)
//   }
// })

// let demo = [1, 2, 3]
// demo.__proto__ = arrProxy
// demo.push(4)
// console.log(demo)

/*
  二分查找
*/

// var Arr = [3, 5, 6, 7, 9, 12, 15];
// function binaryFind(arr, num, start, end) {
//   start = start || 0;
//   end = end || arr.length;
//   var mid = Math.floor((start + end) / 2);
//   var midVal = arr[mid];
//   if (start >= end) {
//       return false;
//   }
//   if (midVal === num) {
//       return 'arr[' + mid + '] = ' + midVal;
//   } else {
//       if (midVal > num) {
//           return binaryFind(arr, num, 0, mid);
//       } else {
//           return binaryFind(arr, num, mid+1);
//       }
//   }
// }
// console.log(binaryFind(Arr, 15, 0, Arr.length));

/*
  写个JavaScript函数来判断是否大于18岁，比如传入1993-6-3，返回true，传递2001-6-3返回false；
*/

/* 分割时间字符串 */
function dateFormat (date) {
  var dateArr = date.split('-');
  return dateArr;
}
 
/* 补0操作 */
function zeroFormat (date) {
  return date > 10 ? date : '0' + date;
}
 
/* 判断是否大于18 */
function isYear (year) {
  var currentDate = new Date();
  var flagDate = dateFormat(year);

  var currentYear = currentDate.getFullYear();
  var currentMon = zeroFormat(currentDate.getMonth() + 1);
  var currentDay = zeroFormat(currentDate.getDate());

  var flagYear = flagDate[0];
  var flagMon = flagDate[1];
  var flagDay = flagDate[2];

  if (currentYear - flagYear > 18) {
      return true;
  } else if (currentYear - flagYear === 18 && currentMon > flagMon) {
      return true;
  } else if (currentYear - flagYear === 18 && currentMon === flagMon && currentDay > flagDay) {
      return true;
  } else {
      return false;
  }
}
console.log(isYear('2000-01-05'));
console.log(isYear('1999-02-14'));
console.log(isYear('1999-02-13'));
console.log(isYear('1989-12-26'));