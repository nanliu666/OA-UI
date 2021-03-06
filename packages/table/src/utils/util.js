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
 * 将驼峰字符串转换为kebab-case字符串
 * @param {string} str 要转换的字符串
 * @returns {string}
 */
export function toKebabCase(str) {
  const REG_UPPER = /[A-Z]/
  let result = ''
  for (const c of str) {
    REG_UPPER.test(c) ? (result += `-${c.toLowerCase()}`) : (result += c)
  }
  // ignore first "-"
  return result.startsWith('-') ? result.slice(1) : result
}

/**
 * 将kebab-case字符串转换为驼峰字符串
 * @param {string} str 要转换的字符串
 * @returns {string}
 */
export function toCamelCase(str) {
  if (!str) return ''
  while (str.indexOf('-') > -1) {
    str = str.replace(/-\w/, /-\w/.exec(str)[0][1].toUpperCase())
  }
  return str[0].toLowerCase() + str.slice(1)
}
