<template>
<div>
  <div id="toggle">
    <div id="back" @click="back">
    	<img class="arrowwh" src="../../../assets/back.png">
    </div>
    <ul id="dingdanlist">
		<router-link to="/person/alldingdan/willpay"><li class="right">待付款</li></router-link>
		<router-link to="/person/alldingdan/willgive"><li class="right">待发货</li></router-link>
		<router-link to="/person/alldingdan/willget"><li class="right">待收货</li></router-link>
		<router-link to="/person/alldingdan/all"><li>全部订单</li></router-link>
	</ul>
  </div>
   <router-view></router-view>
  <bottombar></bottombar>
</div>
</template>
<script>
import bottombar from '../../../components/bottombar'
// import willpay from '../willpay'
export default {
  components: {
    bottombar
    // willpay
  },
  methods: {
    back: function () {
      this.$router.push({path: '/person'})
    }
  }
}
</script>
<style>
#toggle
{
	margin-top: 0.973333rem;
	height: 1.24rem;
	width:100%;
	position: relative;
}
#back
{
	width:1.2rem;
	height: 1.24rem;
	position: absolute;
	top: -0.1rem;
}
.arrowwh
{
	width: 0.2rem;
	height: 0.333333rem;
}
#dingdanlist
{
	padding-left: 1.366667rem;
    padding-top:0.426667rem; 
}
#dingdanlist li
{
	list-style: none;
	float: left;
	font-size: 0.4rem;
	color: black;
}
ul .right
{
	padding-right: 0.946667rem;
}
</style>
