/*
 * @Author: your name
 * @Date: 2020-04-16 22:36:01
 * @LastEditTime: 2020-04-17 20:26:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ruishua\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex' // 导入vuex文件
import api from '@/api/index' // 导入api接口

Vue.config.productionTip = false
Vue.prototype.$api = api

/* eslint-disable no-new */
// 将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
