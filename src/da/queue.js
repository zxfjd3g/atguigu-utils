/* 
自定义队列类型
    入队列: enqueue()
    出队列: dequeue()
    查看队头: front()
    判断队列是否为空: size()
    查看元素的个数: isEmpty()
*/
/* 
  队列类型构造函数
  */
 function Queue() {
  var items = []

  // 队列操作的方法
  // 入队列
  this.enqueue = function (element) {
    items.push(element)
  }

  // 出队列
  this.dequeue = function () {
    return items.shift()
  }

  // 查看队头
  this.front = function () {
    return items[0]
  }

  // 判断队列是否为空
  this.isEmpty = function () {
    return items.length == 0
  }

  // 查看元素的个数
  this.size = function () {
    return items.length
  }
}

export default Queue