import { toKebabCase } from 'main/utils/util'

export const EL_TREE_PROPS = [
  'accordion',
  'allowDrag',
  'allowDrop',
  'autoExpandParent',
  'checkDescendants',
  'checkOnClickNode',
  'checkStrictly',
  'currentNodeKey',
  'data',
  'defaultCheckedKeys',
  'defaultExpandAll',
  'defaultExpandedKeys',
  'draggable',
  'emptyText',
  'expandOnClickNode',
  'filterNodeMethod',
  'highlightCurrent',
  'iconClass',
  'indent',
  'lazy',
  'load',
  'nodeKey',
  'props',
  'renderAfterExpand',
  'renderContent',
  'showCheckbox'
].map(toKebabCase)

export const EL_TREE_METHODS = [
  'append',
  'filter',
  'getCheckedKeys',
  'getCheckedNodes',
  'getCurrentKey',
  'getCurrentNode',
  'getHalfCheckedKeys',
  'getHalfCheckedNodes',
  'getNode',
  'insertAfter',
  'insertBefore',
  'remove',
  'setChecked',
  'setCheckedKeys',
  'setCheckedNodes',
  'setCurrentKey',
  'setCurrentNode',
  'updateKeyChildren'
]

// 覆盖element-UI组件库的默认值
export const EL_TREE_PROPS_DEFAULT = {
  expandOnClickNode: false // 默认点击行的时候不展开
}
