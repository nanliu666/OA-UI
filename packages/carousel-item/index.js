import { CarouselItem } from 'element-ui'
CarouselItem.mgName = 'MgCarouselItem'
CarouselItem.install = function(Vue) {
  Vue.component(CarouselItem.mgName, CarouselItem)
}
export default CarouselItem

