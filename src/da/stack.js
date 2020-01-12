/* 
自定义栈类型
    压栈: push()
    出栈: pop()
    查看栈顶: peek()
    栈中元素个数: size()
    是否是空栈: isEmpty()
*/
function Stack() {
    
  // 用于存储数据的数组
  var items = []

  // 压栈操作
  this.push = function (element) {
      items.push(element)
  }

  // 出栈操作
  this.pop = function () {
      return items.pop()
  }

  // peek操作
  this.peek = function () {
      return items[items.length - 1]
  }

  // 判断栈中的元素是否为空
  this.isEmpty = function () {
      return items.length == 0
  }

  // 获取栈中元素的个数
  this.size = function () {
      return items.length
  }
}

export default Stack