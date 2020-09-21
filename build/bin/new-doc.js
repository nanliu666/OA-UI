'use strict'

process.on('exit', () => {
  console.log()
})

if (!process.argv[2]) {
  console.error('[组件名]必填 - Please enter new component name')
  process.exit(1)
}

const path = require('path')
const fileSave = require('file-save')
const uppercamelcase = require('uppercamelcase')
const { kebabCase } = require('../util')
const componentname = process.argv[2]
const chineseName = process.argv[3] || componentname
const ComponentName = uppercamelcase(componentname)

const mdContent = `## ${ComponentName}${chineseName}
  
<!-- 详细文档见[Ant-Design-Vue ${ComponentName}](https://antdv.com/components/${kebabCase(
  componentname
)}-cn/) -->
### 何时使用


### 基础用法
  
:::demo
\`\`\`html

\`\`\`
:::
`

fileSave(path.join('examples/docs/', `${componentname}.md`))
  .write(mdContent, 'utf8')
  .end('\n')
