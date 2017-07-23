<template lang="html">
    <div class="login">

      <form id="login-table">
        <div class="logo">登录</div>
        <div>
          <input type="text" v-model="user" class="login-user" placeholder="请输入用户名">
        </div>
        <div>
          <input type="password" v-model="pwd" class="login-pwd" placeholder="请输入密码">
        </div>
        <a @click="login" class="login-btn" >登录</a>
        <p class="login-msg">{{msg}}</p>
      </form>
    </div>
</template>
<script>
    import request from '../common/request'
    export default{
      name: 'Login',
      data: function () {
        return {
          msg: '',
          user: '',
          pwd: ''
        }
      },
      methods: {
        login: function () {
          request.post(this.$route, {
            username: this.user,
            passwd: this.pwd
          }, function (data) {
            // 登录成功
            if (data.id) {
              console.log(data)
              localStorage.setItem('id', data.id)
              localStorage.setItem('token', data.token)
              localStorage.setItem('headimgurl', data.headimgurl)
              this.$router.push({path: '/'})
            } else {
              alert(data.msg)
            }
          }.bind(this))
        }
      }
    }
</script>
