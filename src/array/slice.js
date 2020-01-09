/* 
  语法: var new_array = slice(oldArr, [begin[, end]])
  功能: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
*/
export function slice (array, begin, end) {
  // 如果当前数组是[], 直接返回[]
  if (array.length === 0) {
    return []
  }

  // 如果begin超过最大下标, 直接返回[]
  begin = begin || 0
  if (begin >= array.length) {
    return []
  }

  // 如果end不大于begin, 直接返回[]
  end = end || array.length
  if (end > array.length) {
    end = array.length
  }
  if (end <= begin) {
    return []
  }

  // 取出下标在[begin, end)区间的元素, 并保存到最终的数组中
  const arr = []
  for (let index = begin; index < end; index++) {
    arr.push(array[index])
  }

  return arr
}