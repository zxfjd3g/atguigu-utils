/* 
实现浅拷贝
    方法一: 利用ES6语法
    方法二: 利用ES5语法: for...in
*/
/* 方法一: 利用ES6语法*/
export function clone1(target) {
  if (target instanceof Array) {
    // return target.slice()
    // return target.filter(() => true)
    // return target.map(item => item)
    return [...target]
  } else if (target instanceof Object){
    // return Object.assign({}, target)
    return {...target}
  } else {
    return target
  }
} 

/* 方法二: 利用ES5语法: for...in */
export function clone2(target) {
  if (target!=null && typeof target==='object') {
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let key in target) {
      if (target.hasOwnProperty(key)) {
        cloneTarget[key] = target[key]
      }
    }
    return cloneTarget
  } else {
    return target
  }
}
