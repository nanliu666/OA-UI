import CarouselItem from '../carousel/src/item'

/* istanbul ignore next */
CarouselItem.install = function(Vue) {
  Vue.component(CarouselItem.mgName, CarouselItem)
}

export default CarouselItem
