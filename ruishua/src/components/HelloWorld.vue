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
    <input ref="inputValue"/>
    <input type="text" name="提交"  @click="submit">
    <p>{{title}}</p>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      authCode:'',
    };
  },
  created() {
    this.onload();
  },
  mounted(){
   
  },
  computed: {
    title () {
    console.log('title==='+store.state.title)
      return this.$store.state.title
    }
  },
  methods: {
    onload() {
      this.$api.loginModule
        .refreshAuthImage()
        .then(res => {
          
        })
        .catch(value => {
          console.log("数据请求失败===" + value);
        });
    },
    requestLogin(){
      let sn = Math.random().toString() + Math.random().toString();
          let rand = Math.random().toString();
          let epoch_time = new Date().getTime();
          var secret = CryptoJS.HmacMD5(rand + epoch_time.toString(),"fkamsl2k34j56lbo0s8f4md0x8z").toString();
          var that = this;
          let requestData = {
            sn: sn,
            data: {name:"jerry",secret: secret,times: epoch_time,rand: rand,validateCode: that.$refs.inputValue.value
            }
          };
          this.$api.loginModule.login(requestData)
            .then(res=>{
              // console.log("数据请求成功===" + JSON.stringify(res));
              let token = res.data.data.token;
               console.log("数据请求成功===" + token);
             window.localStorage.setItem("access-token", token);
            }).catch(err=>{
            console.log("fail===" + JSON.stringify(err));
            }) ;
    },
    submit(){
      this.requestLogin()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
