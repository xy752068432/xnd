<template>
	<div class="data">
	  <managerheader></managerheader>
	  <div class="m_content">
	  	<managerleft></managerleft>
        <div class="orderfather">
      	  <span class="botton1">订单成交量</span>
      	  <img class="m_licut" src="../../assets/m_data/c_link/licut.png">
      	  <div class="c_time c_ed" @click="toggle(1)"></div>
      	  <select id="s_agent" v-model="agent_id">
      	  	<option v-for="item in agent_ids">{{item.id}}</option>
      	  </select>
        </div>
        <datachild v-bind:agent="agent_id"></datachild>
	  </div>
    </div>
</template>
<script>
import managerheader from '../../components/manager/managerheader'
import managerleft from '../../components/manager/managerleft'
import datachild from '../../components/manager/datachild'
import mrequest from '../../common/mrequest'
export default {
  name: 'data',
  components: {
    managerheader,
    managerleft,
    datachild
  },
  created: function () {
    mrequest.get(this.$router, {
      rootName: 'agent'
    }, function (data) {
      this.agent_ids = data
    }.bind(this))
  },
  data: function () {
    return {
      agent_id: '',
      agent_ids: []
    }
  }
}
</script>
<style>
.data
{
	text-align: left;
}
.m_content
{
	min-width: 1366px;
}
.orderfather
{
	height: 84px;
	width: 1169px;
	font-size: 18px;
	float: left;
	position: relative;
}
.orderfather span
{
	margin-top: 34px;
	display: inline-block;
	height: 37px;
}
.orderfather .m_licut
{
    min-width:1169px; 
    height: 1px;
}
.botton1
{
	margin-left: 102px;
}
.botton2
{
	margin-left: 93px; 
}
.c_time,.c_order
{
	position: absolute;
	top: 33px;
	width: 21px;
	height: 21px;
}
.c_time
{
	left: 73px;	
}
.c_ed
{
	background-image: url(../../assets/m_data/c_link/c_ed.png);
}
.c_ing
{
	background-image: url(../../assets/m_data/c_link/c_ing.png);
}
.c_order
{
    left: 261px;    
}
#order_data
{
	min-width: 1169px;
	height: 800px;
}
#s_agent
{
	width: 75px;
	height: 28px;
	position: absolute;
	top: 28px;
	left:490px;
	font-size: 18px;
}
</style>
