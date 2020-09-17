import { Carousel } from 'element-ui'
Carousel.mgName = 'MgCarousel'
Carousel.install = function(Vue) {
  Vue.component(Carousel.mgName, Carousel)
}
export default Carousel

