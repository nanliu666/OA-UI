import Search from './src/main'

/* istanbul ignore next */
Search.install = function(Vue) {
  Vue.component(Search.mgName, Search)
}

export default Search
