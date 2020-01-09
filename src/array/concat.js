/* 
  1. concat()
    语法: var new_array = concat(old_array, value1[, value2[, ...[, valueN]]]) 
    功能: 将n个数组或值与当前数组合并生成一个新数组
*/
export function concat (array, ...values) {
  const arr = [...array]
  values.forEach(value => { 
    if (Array.isArray(value)) {
      arr.push(...value)
    } else {
      arr.push(value)
    }
  })
  return arr
}