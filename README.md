# mage-ui 组件库

参考element-ui项目结构和实现方案，基于element-ui二次封装的内部组件库，代号mage

### 项目结构

```
├── build  // 编译脚本
├── packages // 组件代码
│	    └── form // 示例组件
│           ├── src
│           │     ├── config.js
│           │     └── form.vue
│           └── index.js
├── examples // 说明文档
│     ├── assets  // 资源文件
│     ├── components // vue组件
│     ├── docs // 每个组件写一个MD文档在这里
│     ├── pages // vue页面文件
│     ├── app.vue // 根文件
│     ├── entry.js // 入口
│     ├── nav.config.json // 路由数据
│     └── util // 工具函数（只有说明文档使用
├── src
│     ├── styles  // 组件公共样式 
│     ├── mixinx  // vue混入 
│     ├── utils // 通用工具库 
│     └── index.js // 组件库入口（自动生成） 
└── components.json // 所有组件的列表，用于自动生成入口
```

### 开发步骤

* 在packages中仿照其他组件文件结构添加组件文件夹，文件和文件夹命名按短横线命名法，文件夹内包含src文件夹和index.js，index.js文件用于导出组件，src下放置组件代码，**组件vue文件必须要添加name属性**，组件名称使用Mg前缀，如下所示
  ```
    export default {
      name: 'MgLazySelect',
    }
  ```

* 在`examples/docs`添加组件对应的MarkDown文档，文件名与组件名相同，文档写法仿照`table.md`，文件从上到下由标题、说明、示例代码、组件参数（props,slot,event,method）组成,注意MarkDown中的示例代码写法如下,组件参数用MarkDown的table写

  ````
    :::demo //demo后面可以写示例的说明文字
    ```html
      <mg-table
       ...
      >
      </mg-table>

      <script>
        export default {
          
        }
      </script>

      <style>
       ...
      </style>
    ```
    :::
  
  ````
  
* 然后在`examples/nav.config.json`中添加文档对应的路径和名称，注意这里对组件分了组，请添加在合适的组里

* 在根目录的`components.json`中添加该组件对应的名称（不包含前缀）和路径
```
    {
      "form": "./packages/form/index.js",
      "table": "./packages/table/index.js",
      "lazy-select": "./packages/lazy-select/index.js"
    }
```

* 执行 `npm run serve`即可本地启动项目，如果已启动请执行`npm run build:file`这将自动在入口添加新组件

### 开发注意事项

* 样式请注意使用scss变量，写在`src/style/var.scss`中，命名按`$--`开头加短横线命名

* 如果组件直接使用element-ui的组件不需要做任何修改，也要按上面步骤建一个组件，组件文件夹内的src文件夹可以省略，在组件内的index.js文件中直接import element-ui组件，改掉名字然后导出，如下：
  ```
    import {Steps} from 'element-ui'

    Steps.name = 'MgSteps'
    Steps.install = function(Vue) {
      Vue.component(Steps.name, Steps)
    }

    export default Steps
  ```

* git commit消息格式按照 `.commitlintrc.js`文件中的关键词＋＇:＇＋提交信息，否则将无法提交代码，请仔细看一下`.commitlintrc.js`中的注释，使用正确的关键词

### 组件设计要点

* 尽量支持elementUI组件原本的全部属性和方法，参考我开发的table组件（除了多级表头还没支持，其他基本都支持了）

* 命名要讲究，取名要能直观反馈出实际的意思，可以参考elementUI的命名，一些常见的字段命名要统一，例如：标签label,值value,字段prop

* 字段设计要直观好理解，保证易用性，不要把所有配置项放到一个字段里，反面例子：[avue](https://avuejs.com/doc/crud/crud-bigcousin)

* 组件要有足够的可扩展性，提供slot扩展

* 输入组件一定要支持v-model指令，例如输入框、选择器等

* 组件命名：文件和文件夹统一使用短横线命名，js中使用驼峰式命名

* 组件样式类名命名按照BEM规范，参考：[前端领域的BEM到底是什么](https://segmentfault.com/a/1190000014687099)
  