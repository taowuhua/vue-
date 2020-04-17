/*
 * @Author: your name
 * @Date: 2020-04-16 23:48:30
 * @LastEditTime: 2020-04-17 23:55:29
 * @LastEditors: Please set LastEditors
 * @Description: 同步修改数据
 * @FilePath: \ruishua\src\vuex\mutations.js
 */
const mutations = {
  modifyTitle: (state) => {
    state.title = '我已经修改了'
    return state.title
  }
}
export default mutations
