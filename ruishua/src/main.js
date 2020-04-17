/*
 * @Author: Your name
 * @Date:   2020-04-17 13:58:38
 * @Last Modified by:   Your name
 * @Last Modified time: 2020-04-17 14:00:39
 */
/*
 * @Author: your name
 * @Date: 2020-04-16 22:36:01
 * @LastEditTime: 2020-04-16 23:53:49
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
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
