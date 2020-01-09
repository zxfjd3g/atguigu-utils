/* 
将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
*/
import _ from 'lodash'

export function chunk (array, size) {
  if (array.length===0) {
    return []
  }
  size = size || 1

  const bigArr = []
  let smallArr = []

  array.forEach(item => {
    if (smallArr.length===0) {
      bigArr.push(smallArr)
    }
    smallArr.push(item)
    if (smallArr.length===size) {
      smallArr = []
    }
  })
  
  return bigArr
}

export function chunk2(array, size) {
  return _.chunk(array, size)
}