<template lang='html'>
    <div class='User'>
      <div class='userInfo'>
        <div class='logo'>Welcome ! {{info.username}}</div>
        <p>UID:{{id}}</p>
        <p>登录次数：{{info.login_count}}</p>
        <a @click='logout' class='logout'>退出登录</a>
        <p>父组件传递过来的参数为:{{args}}</p>
      </div>
    </div>
</template>
<script>
    import request from '@/common/request'

    export default {
      name: 'Info',
      data: function () {
        return {
          id: '',
          info: ''
        }
      },
      created: function () {
        this.id = localStorage.getItem('id')
        // 已经登录过
        if (this.id) {
          request.get(this.$route, function (data) {
            this.info = data
          }.bind(this), '')
        } else {
          alert('请先登录！')
          this.$router.push({path: '/login'})
        }
      },
      methods: {
        logout: function () {
          localStorage.setItem('token', '')
          localStorage.setItem('id', '')
          this.$router.push({path: '/'})
        },
        userInfo: function (userinfo) {
          console.log(userinfo)
        }
      },
      props: ['args']
    }
</script>
