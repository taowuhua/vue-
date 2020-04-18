<!--
 * @Author:陶务华
 * @Date: 2020-04-16 22:36:01
 * @LastEditTime: 2020-04-19 01:00:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ruishua\src\components\HelloWorld.vue
 -->
<template>
  <div class="hello">
    <input ref="inputValue"/>
    <button @click="submit">提交</button>
    <p>{{getTitle}}</p>
    <button @click="modify">同步mutations修改</button>
    <button @click="syncModify">异步actions修改</button>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import {mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      authCode: ''
    }
  },
  created () {
    console.log(this.$constant.title)
    this.onload()
  },
  mounted () {
  },
  // computed: {
  //   title () {
  //     return this.$store.state.title
  //   },
  //   getTitle () {
  //     return this.$store.getters.getTitle
  //   }
  // },
  computed: mapState({
    title: 'title',
    getTitle () {
      return this.$store.getters.getTitle
    }
  }),
  methods: {
    syncModify () {
      return this.$store.dispatch('modifytitle', 'zhazha')
    },
    modify () {
      return this.$store.commit('modifyTitle', '同步渣渣')
    },
    onload () {
      this.$api.loginModule
        .refreshAuthImage()
        .then(res => {

        })
        .catch(value => {
          console.log('数据请求失败===' + value)
        })
    },
    requestLogin () {
      let sn = Math.random().toString() + Math.random().toString()
      let rand = Math.random().toString()
      let epochTime = new Date().getTime()
      var secret = CryptoJS.HmacMD5(rand + epochTime.toString(), 'fkamsl2k34j56lbo0s8f4md0x8z').toString()
      var that = this
      let requestData = {
        sn: sn,
        data: {name: 'jerry', secret: secret, times: epochTime, rand: rand, validateCode: that.$refs.inputValue.value
        }
      }
      this.$api.loginModule.login(requestData)
        .then(res => {
          // console.log("数据请求成功===" + JSON.stringify(res));
          let token = res.data.data.token
          console.log('数据请求成功===' + token)
          window.localStorage.setItem('access-token', token)
        }).catch(err => {
          console.log('fail===' + JSON.stringify(err))
        })
    },
    submit () {
      this.requestLogin()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
