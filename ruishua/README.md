<!--
 * @Author: your name
 * @Date: 2020-04-16 22:36:01
 * @LastEditTime: 2020-04-19 01:01:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ruishua\README.md
 -->
# ruishua
- ctrl+alt+i 生成头部注释
- [创建项目](https://juejin.im/post/5d4d2fc3f265da03c23ec246)
- [命名规范 组件名和类首字母大写，文件夹分隔符命名法](https://www.jianshu.com/p/7e397fc3dd5c)
- [定义常量文件](https://juejin.im/post/59eddbfe6fb9a0450908abb4)
- 跨域本地调试，通过在config------index.js里面的proxyTable进行配置,实现node的转发
- [vuex的使用文档](https://vuex.vuejs.org/zh/guide/state.html)
- vuex 的使用,在组件中引入mapstate, import {mapState} from 'vuex' ;然后根据具体情况进行数据的存储,第一种情况(键值相同的情况)：
 ```
 computed: mapState([
    'title'
  ]),
```
第二种情况：
```
computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
```
  [详情看文档](https://vuex.vuejs.org/zh/guide/state.html)
> 集成一个demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
