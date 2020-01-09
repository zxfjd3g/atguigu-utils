/* 
difference(arr1, arr2): 得到arr1中所有不在arr2中的元素组成的数组(不改变原数组)
    如: [1,3,5,7].difference([5, 8])  ==> [1, 3, 7]
*/
export function difference (arr1, arr2) {
  if (arr1.length===0) {
    return []
  } else if (arr2.length===0) {
    return arr1.slice()
  }
  return arr1.filter(item => arr2.indexOf(item)===-1)
}