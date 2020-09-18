import { toKebabCase } from './util'
// a-table 组件属性
export const A_TABLE_PROPS = [
  'tableLayout',
  'bordered',
  'childrenColumnName',
  'columns',
  'components',
  'dataSource',
  'defaultExpandAllRows',
  'defaultExpandedRowKeys',
  'expandedRowKeys',
  'expandedRowRender',
  'expandIcon',
  'expandRowByClick',
  'expandIconColumnIndex',
  'footer',
  'indentSize',
  'loading',
  'locale',
  'filterReset:',
  'emptyText:',
  'pagination',
  'rowClassName',
  'rowKey',
  'rowSelection',
  'scroll',
  'showHeader',
  'size',
  'title',
  'customHeaderRow',
  'customRow',
  'getPopupContainer',
  'transformCellText'
].map(toKebabCase)

// 表格
export const A_TABLE_PROP_DEFAULT = {
  //  TODO: 在这里写下默认属性
}
export const getATablePropDefault = ({ $attrs }) => Object.assign({}, A_TABLE_PROP_DEFAULT)

// a-table组件事件
export const aTableEvents = ['change', 'expand', 'expandedRowsChange']

export const columnProps = [
  'align',
  'ellipsis',
  'tableLayout',
  'colSpan',
  'dataIndex',
  'defaultFilteredValue',
  'defaultSortOrder',
  'filterDropdown',
  'filterDropdownVisible',
  'filtered',
  'filteredValue',
  'filterIcon',
  'filterMultiple',
  'filters',
  'fixed',
  'key',
  'customRender',
  'sorter',
  'sortOrder',
  'sortDirections',
  'title',
  'width',
  'customCell',
  'customHeaderCell',
  'onFilter',
  'onFilterDropdownVisibleChange',
  'slots',
  'scopedSlots'
]

export const paginationProps = ['position']

export const rowSelectionProps = [
  'columnWidth',
  'columnTitle',
  'fixed',
  'getCheckboxProps',
  'hideDefaultSelections',
  'selectedRowKeys',
  'selections',
  'type',
  'onChange',
  'onSelect',
  'onSelectAll',
  'onSelectInvert'
]

export const scrollProps = ['x', 'y', 'scrollToFirstRowOnChange']

export const selectionProps = ['key', 'text', 'onSelect']
