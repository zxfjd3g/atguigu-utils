/* 
compact(array): 返回数组中所有真值元素组成的新数组
*/
export function compact (array) {
  return array.filter(item => item)
}