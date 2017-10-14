/*
  简单的命令模式 ( 就是把命令触发的方法先保存起来到时候一块执行或者是达到某个条件立即执行 )
*/

let Rya = {
  attack: function () {
    console.log('攻击')
  },
  defense: function () {
    console.log('防御')
  },
  jump: function () {
    console.log('跳跃')
  },
  crouch: function () {
    console.log('蹲下')
  }
}

function makeCommand (receiver, state) {
  return function () {
    receiver[state]()
  }
}

let commands = {
  '119': 'jump', // w
  '115': 'crouch', // s
  '97': 'defense', // a
  '100': 'attack' // d
}

let commandStack = []

document.addEventListener('keypress', function (e) {
  let keyCode = e.keyCode ? e.keyCode : e.which, // 火狐e.keyCode始终为0，要用e.which代替
      command = makeCommand(Rya, commands[keyCode])
      console.log(keyCode)

  if (command) {
    command()
    commandStack.push(command)
  }
}, false)

document.querySelector('#playback').onclick = function () {
  for (let i = 0, len = commandStack.length; i < len; i++) {
    commandStack[i]()
    commandStack.length = 0
  }
}
