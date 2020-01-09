import {call} from './call'
/* 
  自定义函数对象的bind方法
  重要技术:
    高阶函数
    闭包
    call()
    三点运算符
*/
export function bind (fn, obj, ...args) {
  if (obj===null || obj===undefined) {
    obj = obj || window
  }
  
  return function (...args2) {
    call(fn, obj, ...args, ...args2)
  }
}