/*
 * @Author: your name
 * @Date: 2020-04-16 23:48:58
 * @LastEditTime: 2020-04-18 23:35:34
 * @LastEditors: Please set LastEditors
 * @Description: 异步修改数据(注意参数为context类似this.$store,使用在methords定义一个方法
 * 返回this.$store.dispatch('xxx', 'params')
 * @FilePath: \ruishua\src\vuex\actions.js
 */
const actions = {
  modifytitle: (context, payload) => {
    context.commit('modifyTitle', payload)
  }
}
export default actions
