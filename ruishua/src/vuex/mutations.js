/*
 * @Author: your name
 * @Date: 2020-04-16 23:48:30
 * @LastEditTime: 2020-04-18 23:34:12
 * @LastEditors: Please set LastEditors
 * @Description: 同步修改数据(使用在methords定义一个方法返回this.$store.commit('xxxtype'))
 * @FilePath: \ruishua\src\vuex\mutations.js
 */
const mutations = {
  modifyTitle: (state, payload) => {
    state.title = payload
    return state.title
  }
}
export default mutations
