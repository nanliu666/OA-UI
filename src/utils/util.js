export const getObjType = (obj) => {
  var toString = Object.prototype.toString
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[toString.call(obj)]
}
/**
 * 对象深拷贝
 */
export const deepClone = (data) => {
  var type = getObjType(data)
  var obj
  if (type === 'array') {
    obj = []
  } else if (type === 'object') {
    obj = {}
  } else {
    //不再具有下一层次
    return data
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]))
    }
  } else if (type === 'object') {
    for (var key in data) {
      obj[key] = deepClone(data[key])
    }
  }
  return obj
}

/**
 * 对象取值
 * @param {Object} obj
 * @param {String} path
 */
export const get = (obj, path, defaultValue) => {
  var paths = path.split('.'),
    current = obj,
    i

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] == undefined) {
      return defaultValue
    } else {
      current = current[paths[i]]
    }
  }
  return current
}

/**
 * 对象数组扁平化
 * @param {{[props:string]:any, children: any[]}[]} target 要进行扁平化的对象数组
 * @param {String} children 对象的children属性
 * @returns {Array} 扁平化后的数组
 */
export function flattenBy(target, children = 'children') {
  return Array.from(
    (function* f(target, children) {
      for (const item of target) {
        if (Array.isArray(item[children])) {
          yield* [item, ...f(item[children], children)]
        } else {
          yield item
        }
      }
    })(target, children)
  )
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
