# fmp-app

目标是极致的开发体验跟生产发版体验


## 初步设计

![设计思维导图](http://study.maqixiang.com/assets/img/design.1b478656.png)

## todolist

- [ ] vue编译工具 
  - [x] koa服务
  - [ ] vue单文件解析成JS
  - [ ] vue单文件，开发环境下组件切换成单个组件模板，通过name区分不同的组件
  - [ ] esbuild单文件构建
  - [ ] 静态资源文件的处理
  - [ ] node_modules里的文件单独处理
- [ ] compiler
  - [ ] 将Vue组件生成对应的Page / Component
  - [ ] vue组件与小程序对应的生命周期合并
  - [ ] 基于配置，生成小程序对应的应用配置以及页面配置
  - [ ] 将所有的组件转换为通用的模板，Page / Component
  - [ ] 特殊的wxs，或者一些静态资源文件复制到对应的目录
- [ ] runtime
  - [ ] 重写vue3的渲染模块
  - [ ] 自定义VNode用于渲染
  - [ ] 差异化处理小程序相关的方法
  - [ ] 文件接口请求与动态解析
  - [ ] 插件引用能力
  - [ ] 排查vue3是否所有方法都支持（部分操作dom的方法可能需要polyfill）
