/* async await */

// let sleep = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('done')
//     }, time)
//   })
// }

// let start = async () => {
//   console.log('start')
//   let result = await sleep(1000)
//   console.log(result)
//   console.log('end')
// }

// start()

/* async await try catch */

// let sleep = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('error')
//     }, time)
//   })
// }

// let start = async () => {
//   try {
//     console.log('start')
//     let result = await sleep(1000)
//     console.log(result) // 不执行 跳到catch
//     console.log('end') // 不执行
//   } catch (error) {
//     console.log(error)
//   }
// }

// start()

/* async await for循环 */

let sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done')
    }, time)
  })
}

let start = async () => {
  for (let i of [1, 2, 3, 4]) {
    await sleep(1000) // 等待sleep返回的Promise resolve后才会执行下面的语句
    console.log(i)
  }
}

start()