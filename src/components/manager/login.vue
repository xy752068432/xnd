<template>
    <div class="container">
      <managerheader></managerheader>
      <div class="login">
        <div class="img-container">
          <div class="top-img"></div>
          <div class="top-img-text"></div>
        </div>
        <div class="form-horizontal">
          <span class="hint" :value="hintText">{{ hintText }}</span>
          <div class="form-group clearfix">
            <label class="control-label" for="username">账号</label>
            <div class="input-area">
              <input id="username" name="username" type="text" placeholder="请输入用户名" v-model="username">
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="control-label" for="passwd">密码</label>
            <div class="input-area">
              <input id="passwd" name="passwd" type="password" placeholder="请输入密码" v-model="passwd">
            </div>
          </div>
          <div class="submit">
              <button type="submit" @click="login"><img src="./../../assets/m_login/login.png" /></button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import request from '../../common/mrequest'
  import managerheader from './managerheader'
  export default {
    name: 'agentLogin',
    components: {
      managerheader
    },
    data () {
      return {
        username: '',
        passwd: '',
        hintText: '',
        isSubmit: ''
      }
    },
    methods: {
      login () {
        if (this.isSubmit) {
          return
        }
        this.isSubmit = true
        if (this.username.length === 0) {
          this.hintText = '用户名不能为空'
          return
        }
        if (this.passwd.length === 0) {
          this.hintText = '密码不能为空'
          return
        }
        var postdata = {
          rootName: 'agentLogin',
          username: this.username,
          passwd: this.passwd
        }
        // console.log(this.$route)
        request.post(this.route, postdata, function (data) {
          if (!data.hasOwnProperty('code')) {
            this.$router.push({path: '/manager/checkorder'})
            localStorage.setItem('agent', data['id'])
            localStorage.setItem('token', data['token'])
          } else {
            this.hintText = data['msg']
            this.passwd = ''
          }
          this.isSubmit = false
        }.bind(this), function (error) {
          this.isSubmit = false
          console.log(error)
        }.bind(this))
      }
    }
  }
</script>
<style>
 .clearfix {
  display: table;
  content: '';
  clear: both;
 }
 .container {
  position: relative;
  font-family: '微软雅黑';
 }

 .login {
  width: 336px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 105px;
 }

 .img-container {
  width: 236px;
  margin-left: 53px;
 }
 .top-img {
  width: 164px;
  height: 164px;
  margin-left: auto;
  margin-right: auto;
  background-image: url('./../../assets/m_login/xingxiang.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-bottom: 12px;
 }

 .top-img-text {
  width: 236px;
  height: 28px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 76px;
  background-image: url('./../../assets/m_login/text.png');
 }
 .form-horizontal {
  position: relative;
 }
 .hint {
  position: absolute;
  top: -40px;
  left: 0;
  display: inline-block;
  color: red;
  font-size: 16px;
  text-align: center;
  width: 100%;
  height: 20px;
 }
 .form-horizontal .control-label,
 .form-horizontal .input-area {
  float: left;
 }
  .login .control-label {
  width: 44px;
  padding-right: 9px;
  font-size: 22px;
  color: #000;
  text-align: right;
  line-height: 22px;
 }
 .input-area {
  width: 236px;
 }
 .input-area input{
  width: 100%;
  border: 1px solid #666;
  border-radius: 3px;
  outline: none;
  box-sizing: border-box;
  height: 31px;
  font-size: 13px;
  color: #666;
  padding: 9px 0;
  vertical-align: top;
 }
 .form-group {
  margin-bottom: 24px;
 }
 .submit {
  margin-top: 92px;
 }
 .submit button {
  padding: 0;
  border: none;
  background: #fff;
 }
 .submit img {
  width: 118px;
  height: 33px;
 }
</style>
