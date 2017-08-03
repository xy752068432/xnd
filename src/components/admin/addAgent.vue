<template>
  <table class="form form-horizontal">
    <div class="hint">{{ hintText }}</div>
    <tbody>
      <tr>
        <td>
          <label class="control-label">账户名</label>
          <input type="text" name="username" v-model="username" placeholder="请输入用户名">
        </td>
        <td>
          <label class="control-label">密码</label>
          <input type="password" name="passwd" v-model="passwd" placeholder="请输入密码">
        </td>
      </tr>
      <tr>
        <td>
          <label class="control-label">姓名</label>
          <input type="text" name="name" v-model="name" placeholder="姓名">
        </td>
        <td>
          <label class="control-label">确认密码</label>
          <input type="password" name="confirmPasswd" v-model="confirmPasswd" placeholder="请再次输入密码">
        </td>
      </tr>
      <tr>
        <td>
          <label class="control-label">手机号</label>
          <input type="text" name="phone" v-model="phone" placeholder="手机号">
        </td>
      </tr>
      <tr>
        <td>
          <label class="control-label">身份证号</label>
          <input type="text" name="idNum" v-model="idNum" placeholder="身份证号">
        </td>
      </tr>
      <tr>
        <td>
          <label class="control-label">地址</label>
          <input type="text" name="addr" v-model="addr" placeholder="地址">
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <button type="button" class="btn" @click="submit"><img src="./../../assets/admin/submit.png"></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import request from './../../common/request'
export default {
  name: 'addAgent',
  data () {
    return {
      username: '',
      passwd: '',
      confirmPasswd: '',
      name: '',
      phone: '',
      idNum: '',
      addr: '',
      hintText: '',
      isSubmit: false
    }
  },
  methods: {
    submit () {
      if (this.isSubmit) {
        return
      }
      var isIllege = this.validate()
      if (!isIllege) {
        return
      }
      this.isSubmit = true
      var mydata = {
        'rootName': 'agent',
        username: this.username,
        passwd: this.passwd,
        confirm: this.confirmPasswd,
        name: this.name,
        phone: this.phone,
        id_num: this.idNum,
        address: this.addr
      }
      request.post(this.route, mydata, function (data) {
        if (data.hasOwnProperty('code') && data.code !== 0) {
          this.hintText = data.msg
        } else {
          alert('添加成功')
          this.username = ''
          this.passwd = ''
          this.confirmPasswd = ''
          this.name = ''
          this.phone = ''
          this.idNum = ''
          this.addr = ''
        }
        this.isSubmit = false
        console.log('111')
      }.bind(this), function (error) {
        this.isSubmit = false
        console.log(error)
        console.log('fail')
      }.bind(this))
    },
    validate () {
      var isIllege = false
      if (this.username.length < 6 || this.username.length > 16) {
        this.hintText = '用户名长度为6-16位'
      } else if (this.passwd.length < 6 || this.username.length > 18) {
        this.hintText = '密码长度为8-18位'
      } else if (this.passwd !== this.confirmPasswd) {
        this.hintText = '密码不一致'
      } else if (/^\d{11}$/.test(this.phone) === false) {
        this.hintText = '手机号为11位'
      } else if (/^\d{18}$/.test(this.idNum) === false) {
        this.hintText = '身份证号为18位'
      } else if (this.addr.length > 127) {
        this.hintText = '地址的长度不能超过127'
      } else {
        isIllege = true
        this.hintText = ''
      }
      return isIllege
    }
  }
}
</script>

<style>
  .form-horizontal {
    margin-top: 4px;
    margin-left: 275px;
  }
  .form-horizontal input {
    border: 1px solid #666;
    width: 245px;
    height: 30px;
    font-size: 16px;
    vertical-align: middle;
    padding-left: 5px;
    border-radius: 2px;
  }
  table.form {
    position: relative;
    border-collapse: separate;
    border-spacing: 65px 113px;
  }
  table.form .btn {
    float: right;
    background: #fff;
    outline: none;
    border: none;
  }
  .hint {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    font-size: 16px;
    color: red;
    text-align: center;
  }
</style>
