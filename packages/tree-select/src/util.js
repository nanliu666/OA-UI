/**
 * 对象数组扁平化
 * @param {{[props:string]:any, children: any[]}[]} target 要进行扁平化的对象数组
 * @param {String} children 对象的children属性
 * @returns {Iterable<any>} 扁平化后的数组
 */
export function* flatten(target, children = 'children') {
  for (const item of target) {
    if (Array.isArray(item[children])) {
      yield* [item, ...flatten(item[children])]
    } else {
      yield item
    }
  }
}

/**
 * 省略对象的指定属性，返回一个浅拷贝的对象
 * @param {object} target 目标对象
 * @param {String|String[]} props 要省略的属性
 * @returns {object} 返回对象
 */
export function omit(target, props) {
  const result = {}
  props = Array.isArray(props) ? props : [props]
  for (const key in target) {
    if (!props.includes(key)) {
      result[key] = target[key]
    }
  }
  return result
}
