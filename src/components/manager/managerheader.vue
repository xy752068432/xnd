<template>
	<div id="m_header">
       <img src="../../assets/m_login/LOGO.jpg">
       <div id="button">
       	  <img src="../../assets/m_login/search.png">
       	  <img src="../../assets/m_login/set.png">
       	  <img src="../../assets/m_login/ref.png">
       	  <img @click = "logout" src="../../assets/m_login/out.png">
       </div>
	</div>
</template>
<script>
export default {
  name: 'managerheader',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({path: './login'})
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
  cursor: pointer;
}
</style>
