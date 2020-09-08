import { Card } from 'element-ui'
Card.mgName = 'MgCard'
Card.install = function(Vue) {
  Vue.component(Card.mgName, Card)
}
export default Card
