// element 组件属性
export const EL_SELECT_PROPS = [
  'allowCreate',
  'autocomplete',
  'automaticDropdown',
  'clearable',
  'collapseTags',
  'defaultFirstOption',
  'disabled',
  'filterable',
  'filterMethod',
  'id',
  'loading',
  'loadingText',
  'multiple',
  'multipleLimit',
  'name',
  'noDataText',
  'noMatchText',
  'placeholder',
  'popperAppendToBody',
  'popperClass',
  'remote',
  'remoteMethod',
  'reserveKeyword',
  'size',
  'value',
  'valueKey'
]

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
]

export const EL_TREE_PROPS_DEFAULT = {
  expandOnClickNode: false, // 默认点击行的时候不展开
  highlightCurrent: true // 默认高亮当前选中的项
}
export function getElTreePropsDefault(vm) {
  return Object.assign(
    {
      // 根据vm生成的属性
      nodeKey: vm.$attrs.props.value
    },
    EL_TREE_PROPS_DEFAULT
  )
}
