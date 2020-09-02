export function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/)
  return result && result[2] ? result[2].trim() : ''
}

export function stripTemplate(content) {
  content = content.trim()
  if (!content) {
    return content
  }
  return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
}
/**
 * 获取当前目录下的所有文件
 * @param {*} files 通过如require.context('@/assets/images/homeImages', false, /\.png$/)输入的文件
 * @param {*} type 指定当前的文件类型，注意带点号，实例：type=.png
 * @return 返回当前文件夹下的所有同一类型的文件对象 
 */
export const improtAllFiles = (files, type) => {
  const path = require('path')
  const modules = {}
  files.keys().forEach((key) => {
    const name = path.basename(key, type)
    modules[name] = files(key).default || files(key)
  })
  return modules
}
