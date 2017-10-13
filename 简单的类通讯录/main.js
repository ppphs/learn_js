window.onload = function () {
  function myCreateElement (tagName, className, innerText){
		var newElement = document.createElement(tagName)
		if (className) {
			newElement.className = className
		}
		if (innerText) {
			newElement.innerText = innerText
		}
		return newElement
  }

  function move (text) {
    let targetItem = document.querySelector(`[nav-title="${text}"]`)
    let positionY = targetItem.getBoundingClientRect().top
    window.scrollTo(0, positionY + window.scrollY) // 这里必须加上视口滚动了多少，因为positionY是元素相对于视口左上角的0，0点的
  }
  
  let nav = myCreateElement('nav', 'initialList') // 动态创建导航栏
  let listUl = myCreateElement('ul')
  nav.appendChild(listUl)
  document.body.appendChild(nav)

  let liList = document.querySelectorAll('[nav-title]')

  for (let i = 0, len = liList.length; i < len; i++) { // 把标题加入导航栏
    let li = myCreateElement('li', 'item', liList[i].getAttribute('nav-title'))
    listUl.appendChild(li)
  }

  nav.addEventListener('click', function (e) {
    move(e.target.innerText) // 点击移动
  }, false)

}