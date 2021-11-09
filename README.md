# fmp-app

目标是进一步提示的开发体验跟生产发版体验

## 初步设计

![设计思维导图](http://study.maqixiang.com/assets/img/design.1b478656.png)

## todolist

- [ ] vue 编译工具
  - [ ] koa 服务
  - [ ] esbuild 单文件构建
  - [ ] 静态资源文件的处理
  - [ ] node_modules 里的文件单独处理
- [ ] compiler
  - [ ] 将 Vue 组件生成对应的 Page / Component
  - [ ] vue 组件与小程序对应的生命周期合并
  - [ ] 基于配置，生成小程序对应的应用配置以及页面配置
  - [ ] 将所有的组件转换为通用的模板，Page / Component
  - [ ] 特殊的 wxs，或者一些静态资源文件复制到对应的目录
- [ ] runtime
  - [ ] 重写 vue3 的渲染模块
  - [ ] 自定义 VNode 用于渲染
  - [ ] 差异化处理小程序相关的方法
  - [ ] 文件接口请求与动态解析
  - [ ] 插件引用能力
  - [ ] 排查 vue3 是否所有方法都支持（部分操作 dom 的方法可能需要 polyfill）
