/* 
merge(arr1, arr2): 将arr2与arr1的元素进行合并组成一个新的数组(不改变原数组)
  如: merge([1,3,5,7,5], [1, 5, 8]) ==> [1, 3, 5, 7, 5, 8]
*/

export function mergeArray (arr1, arr2) {
  var result = arr1.slice()
  if (!arr2 || arr2.length===0) {
    return result
  }
  arr2.forEach(item => {
    if (result.indexOf(item)===-1) {
      result.push(item)
    }
  })
  
  return result
}