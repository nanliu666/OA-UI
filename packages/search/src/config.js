import { EL_TREE_PROPS_DEFAULT } from '../../tree-select/src/config'

// element 组件属性
export const EL_SELECT_EVENTS = ['change', 'visible-change', 'remove-tag', 'clear', 'blur', 'focus']

export const EL_SELECT_METHODS = ['focus', 'blur']

export const EL_SELECT_PROPS = [
  'value',
  'multiple',
  'disabled',
  'value-key',
  'size',
  'clearable',
  'collapse-tags',
  'multiple-limit',
  'name',
  'autocomplete',
  'auto-complete',
  'placeholder',
  'filterable',
  'allow-create',
  'filter-method',
  'remote',
  'remote-method',
  'loading',
  'loading-text',
  'no-match-text',
  'no-data-text',
  'popper-class',
  'reserve-keyword',
  'default-first-option',
  'popper-append-to-body',
  'automatic-dropdown'
]

export const EL_SELECT_PROPS_DEFAULT = {
  autocomplete: 'on',
  'allow-create': true,
  'default-first-option': true, // Enter to select first options
  clearable: true,
  filterable: true,
  placeholder: '请输入搜索内容'
}

export const getElSelectPropsDefault = (vm) => Object.assign({}, EL_TREE_PROPS_DEFAULT)
