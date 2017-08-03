<template>
  <nav class="navbar">
    <div class="navbar-header">
      <div class="navbar-brand">
        <img  src="./../../assets/admin/LOGO.jpg" alt="鲜农达" title="鲜农达" />
      </div>
    </div>
    <ul class="nav">
      <li><a href="javascript:void(0)"><img src="./../../assets/admin/search.png" alt="" title="" /></a></li>
      <li><a href="javascript:void(0)"><img src="./../../assets/admin/setting.png" alt="" title="" /></a></li>
      <li><a href="javascript:void(0)"><img src="./../../assets/admin/refresh.png" alt="" title="" /></a></li>
      <li><a @click = "logout" href="javascript:void(0)"><img src="./../../assets/admin/logout.png" alt="" title="" /></a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {

      }
    },
    methods: {
      logout () {
        localStorage.clear()
        this.$router.push({path: './login'})
      }
    }
  }
</script>

<style>
  .navbar {
  width: 100%;
  height: 84px;
  line-height: 84px;
  background: url('./../../assets/admin/nav_bg.jpg');
 }
 .navbar .navbar-header{
  width: 192px;
  height: 100%;
  float: left;
 }
 .navbar .navbar-brand {
  width: 100%;
  height: 100%;
 }
 .navbar .nav {
  float: right;
 }
 .navbar .nav li{
  float: left;
  margin-right: 82px;
 }
 .navbar .nav li img{
  width: 19px;
  height: 19px;
 }
</style>
