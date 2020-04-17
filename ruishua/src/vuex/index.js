/*
 * @Author: 陶务华
 * @Date: 2020-04-16 23:48:20
 * @LastEditTime: 2020-04-17 20:19:20
 * @LastEditors: Please set LastEditors
 * @Description: 实例化store
 * @FilePath: \ruishua\src\vuex\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
