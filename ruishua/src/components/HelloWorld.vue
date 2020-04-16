<!--
 * @Author:陶务华
 * @Date: 2020-04-16 22:36:01
 * @LastEditTime: 2020-04-17 00:28:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ruishua\src\components\HelloWorld.vue
 -->
<template>
  <div class="hello">
  <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.onload()
  },
  methods: {
    onload () {
      this.$api.loginModule.refreshAuthImage()
        .then(res => {
          console.log('数据请求成功===' + res)
          let token = res.data.data.token
          // 成功之后存入缓存
          window.localStorage.setItem('token', token)
        }).catch((value) => {
          console.log('数据请求失败===' + value)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
