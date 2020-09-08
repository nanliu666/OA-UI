import { Pagination } from 'element-ui'
import './pagination.scss'
Pagination.mgName = 'MgPagination'
Pagination.install = function(Vue) {
    Vue.component(Pagination.mgName, Pagination)
  }
export default Pagination

