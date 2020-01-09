/* 
实现函数节流的函数
*/

export function throttle(callback, delay) {
  let start = 0 // 必须保存第一次点击立即调用
  return function () { // 它的this是谁就得让callback()中的this是谁, 它接收的所有实参都直接交给callback()
    console.log('throttle 事件')
    const current = Date.now()
    if (current - start > delay) { // 从第2次点击开始, 需要间隔时间超过delay
      callback.apply(this, arguments)
      start = current
    }
  }
}