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
/**
 * @description 格式化金额
 * @param number：要格式化的数字
 * @param decimals：保留几位小数 默认0位
 * @param decPoint：小数点符号 默认.
 * @param thousandsSep：千分位符号 默认为,
 */
export function formatMoney(number, decimals = 0, decPoint = '.', thousandsSep = ',') {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  const sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep
  const dec = typeof decPoint === 'undefined' ? '.' : decPoint
  let s = ''
  const toFixedFix = function(n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

/**
 * 格式化数字
 * @param number
 * @param decimals
 */
export function formatDecimals(number, decimals = 2) {
  return formatMoney(number, decimals, '.', '')
}
export function throttle(fn, wait, options = {}) {
  let timer
  let previous = 0
  let throttled = function() {
    let now = +new Date()
    // remaining 不触发下一次函数的剩余时间
    if (!previous && options.leading === false) previous = now
    let remaining = wait - (now - previous)
    if (remaining < 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      fn.apply(this, arguments)
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        previous = options.leading === false ? 0 : new Date().getTime()
        timer = null
        fn.apply(this, arguments)
      }, remaining)
    }
  }
  return throttled
}
