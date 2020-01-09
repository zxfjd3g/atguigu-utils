/* 
实现函数防抖的函数
*/
export function debounce(callback, delay) {
  return function () {
    console.log('debounce 事件...')
    // 保存this和arguments
    const that = this
    const args = arguments
    
    // 清除待执行的定时器任务
    if (callback.timeoutId) {
      clearTimeout(callback.timeoutId)
    }
    // 每隔delay的时间, 启动一个新的延迟定时器, 去准备调用callback
    callback.timeoutId = setTimeout(function () {
      callback.apply(that, args)
      // 如果定时器回调执行了, 删除标记
      delete callback.timeoutId
    }, delay)
  }
}