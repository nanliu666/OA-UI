function kebabCase(name) {
  return (
    name.charAt(0).toLowerCase() +
    name.slice(1).replace(/([A-Z])/g, (m, n) => {
      return '-' + n.toLowerCase()
    })
  )
}
function camelCase(name) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase()
    })
  )
}
module.exports = { kebabCase, camelCase }
