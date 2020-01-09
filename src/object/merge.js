/* 
merge(...objs): 合并多个对象, 返回一个合并后对象(不改变原对象)
*/
export function mergeObject(...objs) {
  return objs.reduce((pre, obj) => {
    return Object.keys(obj).reduce((p, key) => {
      p[key] = !p.hasOwnProperty(key) ? obj[key] : [].concat(p[key], obj[key])
      return p
    }, pre)
  
  }, {})
}