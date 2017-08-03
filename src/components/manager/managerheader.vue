<template>
	<div id="m_header">
       <img src="../../assets/m_login/LOGO.jpg">
       <div id="button">
       	  <img src="../../assets/m_login/search.png">
       	  <img src="../../assets/m_login/set.png">
       	  <img src="../../assets/m_login/ref.png">
       	  <img src="../../assets/m_login/out.png" @click="loginout">
       </div>
	</div>
</template>
<script>
export default {
  name: 'managerheader',
  methods: {
    loginout: function () {
      if (this.$route.fullPath !== '/manager/login') {
        this.$router.push({path: '/manager/login'})
      }
    }
  }
}
</script>
<style>
#m_header
{
  min-width: 1366px;
  text-align: left;
  height: 84px;
  min-height: 84px;
  background-image:url(../../assets/m_login/top.jpg);
}
#m_header img
{
  width: 192px;
  height: 100%;
}
#button
{
	float: right;
	margin-right: 82px;
}
#button img
{
	width: 19px;
	height: 19px;
	margin-right: 41px;
	margin-top: 33px;
}
</style>
