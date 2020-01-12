/* 
封装优先级队列
注意: priority越小优先级越高
*/
function PriorityQueue() {
  var items = []

  // 封装一个新的构造函数, 用于保存元素和元素的优先级
  function QueueElement(data, priority) {
    this.data = data
    this.priority = priority
  }

  /* 
  入队列(很可能不是加队尾)
  */
  this.enqueue = function (data, priority) {
    var queueElement = new QueueElement(data, priority)

    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          return
        }
      }
      items.push(queueElement)
    }
  }
  
  /* 
  出队列
  */
  this.dequeue = function () {
    return items.shift()
  }

  /* 
  查看队头元素
  */
  this.front = function () {
    return items[0]
  }

  /* 
  查看队列是否为空的
  */
  this.isEmpty = function () {
    return items.length == 0
  }

  /* 
  获取元素的个数
  */
  this.size = function () {
    return items.length
  }
}

export default PriorityQueue