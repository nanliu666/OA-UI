/* Automatically generated by './build/bin/build-entry.js' */

import './styles/common.scss'
import '../packages/index.scss'

import Table from '../packages/table/index.js'
import Dropdown from '../packages/dropdown/index.js'
import DropdownMenu from '../packages/dropdown-menu/index.js'
import DropdownItem from '../packages/dropdown-item/index.js'
import Avatar from '../packages/avatar/index.js'
import Timeline from '../packages/timeline/index.js'
import TimelineItem from '../packages/timeline-item/index.js'
import Card from '../packages/card/index.js'
import Popover from '../packages/popover/index.js'
import Tooltip from '../packages/tooltip/index.js'
import Popconfirm from '../packages/popconfirm/index.js'
import List from '../packages/list/index.js'
import Pagination from '../packages/pagination/index.js'
import Tabs from '../packages/tabs/index.js'
import TabPane from '../packages/tab-pane/index.js'
import LazySelect from '../packages/lazy-select/index.js'
import Menu from '../packages/menu/index.js'
import MenuItem from '../packages/menu-item/index.js'
import MenuItemGroup from '../packages/menu-item-group/index.js'
import Submenu from '../packages/submenu/index.js'
import Steps from '../packages/steps/index.js'
import Step from '../packages/step/index.js'
import Tag from '../packages/tag/index.js'
import Carousel from '../packages/carousel/index.js'
import CarouselItem from '../packages/carousel-item/index.js'
import Tree from '../packages/tree/index.js'
import TreeSelect from '../packages/tree-select/index.js'
import DatePicker from '../packages/date-picker/index.js'
import Select from '../packages/select/index.js'

const components = [
  Table,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Timeline,
  TimelineItem,
  Card,
  Popover,
  Tooltip,
  Popconfirm,
  List,
  Pagination,
  Tabs,
  TabPane,
  LazySelect,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Steps,
  Step,
  Tag,
  Carousel,
  CarouselItem,
  Tree,
  TreeSelect,
  DatePicker,
  Select,
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Table,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Timeline,
  TimelineItem,
  Card,
  Popover,
  Tooltip,
  Popconfirm,
  List,
  Pagination,
  Tabs,
  TabPane,
  LazySelect,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Steps,
  Step,
  Tag,
  Carousel,
  CarouselItem,
  Tree,
  TreeSelect,
  DatePicker,
  Select
}
