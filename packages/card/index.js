import { Card } from 'element-ui'
Card.name = 'MgCard'
Card.install = function(Vue) {
    Vue.component(Card.name, Card)
  }
export default Card