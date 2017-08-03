<template>
	<div class="data">
	  <managerheader></managerheader>
	  <div class="m_content">
	  	<managerleft></managerleft>
        <div class="orderfather">
      	  <span class="botton1">按时间查询</span> <span class="botton2">按订单查询</span>
      	  <img class="m_licut" src="../../assets/m_data/c_link/licut.png">
      	  <div class="c_time" @click="toggle(1)" :class="state1?'c_ed' : 'c_ing'"></div>
      	  <div class="c_order" @click="toggle(2)" :class="!state1? 'c_ed' : 'c_ing'"></div>
      	  <select id="s_agent" v-model="agent_id">
      	  	<option>1</option>
      	  	<option>2</option>
      	  </select>
        </div>
        <cochild v-bind:agent="agent_id" v-bind:state="state"></cochild>
	  </div>
    </div>
</template>
<script>
import managerheader from '../../components/manager/managerheader'
import managerleft from '../../components/manager/managerleft'
import cochild from '../../components/manager/cochild'
export default {
  name: 'data',
  components: {
    managerheader,
    managerleft,
    cochild
  },
  data: function () {
    return {
      state1: true,
      agent_id: '',
      state: ''
    }
  },
  methods: {
    toggle: function (num) {
      if (num === 1) {
        if (this.state1 === false) {
          this.state1 = true
          this.state = 1
        }
      }
      if (num === 2) {
        if (this.state1 === true) {
          this.state1 = false
          this.state = 2
        }
      }
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
	min-height: 800px;
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
