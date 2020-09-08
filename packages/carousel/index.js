import Carousel from './src/main'

/* istanbul ignore next */
Carousel.install = function(Vue) {
  Vue.component(Carousel.mgName, Carousel)
}

export default Carousel
