/* 
merge(...objs): 合并多个对象, 返回一个合并后对象(不改变原对象)
{ a: [{ x: 2 }, { y: 4 }], b: 1}
{ a: { z: 3}, b: [2, 3], c: 'foo'}
合并后: { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
*/
export function mergeObject(...objs) {
  return objs.reduce((pre, obj) => {
    return Object.keys(obj).reduce((p, key) => {
      p[key] = !p.hasOwnProperty(key) ? obj[key] : [].concat(p[key], obj[key])
      return p
    }, pre)
  }, {})
}