/* 
实现数组声明式处理系列工具函数
*/

/* 
实现map()
*/
export function map (array, callback) {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    arr.push(callback(array[index], index))
  }
  return arr
}

/*
实现reduce() 
*/
export function reduce (array, callback, initValue) {
  let result = initValue
  for (let index = 0; index < array.length; index++) {
    // 调用回调函数将返回的结果赋值给result
    result = callback(result, array[index], index)
  }
  return result
}

/* 
实现filter()
*/
export function filter(array, callback) {
  
  const arr = []
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      arr.push(array[index])
    }
  }
  return arr
}

/* 
实现find()
*/
export function find (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index]
    }
  }
  return undefined
}

/* 
实现findIndex()
*/
export function findIndex (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return index
    }
  }
  return -1
}

 /* 
 实现every()
 */
 export function every (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) { // 只有一个结果为false, 直接返回false
      return false
    }
  }
  return true
}

/* 
实现some()
*/
export function some (array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) { // 只有一个结果为true, 直接返回true
      return true
    }
  }
  return false
}

export function test() {
  console.log('test()222')
}