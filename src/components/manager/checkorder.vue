<template>
	<div class="data1">
	  <managerheader></managerheader>
	  <div class="m_content1">
	  	<managerleft></managerleft>
        <div class="orderfather1">
      	  <span class="botton11">按时间查询</span> <span class="botton21">按订单查询</span>
      	  <img class="m_licut11" src="../../assets/m_data/c_link/licut.png">
      	  <div class="c_time1" @click="toggle(1)" :class="state1?'c_ed1' : 'c_ing1'"></div>
      	  <div class="c_order1" @click="toggle(2)" :class="!state1? 'c_ed1' : 'c_ing1'"></div>
      	  <select id="s_agent1" v-model="agent_id">
      	  	<option v-for="item in agent_ids">{{item.id}}</option>
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
import mrequest from '../../common/mrequest'
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
      state: '',
      agent_ids: []
    }
  },
  created: function () {
    mrequest.get(this.$router, {
      rootName: 'agent'
    }, function (data) {
      this.agent_ids = data
    }.bind(this))
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
.data1
{
	text-align: left;
}
.m_content1
{
	min-width: 1366px;
}
.orderfather1
{
	height: 84px;

	font-size: 18px;
	
	position: relative;
}
.orderfather1 span
{
	margin-top: 34px;
	display: inline-block;
	height: 37px;
}
.orderfather1 .m_licut
{
    min-width:1169px; 
    height: 1px;
}
.botton11
{
	margin-left: 102px;
}
.botton21
{
	margin-left: 93px; 
}
.c_time1,.c_order1
{
	position: absolute;
	top: 33px;
	width: 21px;
	height: 21px;
}
.c_time1
{
	left: 261px;	
}
.c_ed1
{
	background-image: url(../../assets/m_data/c_link/c_ed.png);
}
.c_ing1
{
	background-image: url(../../assets/m_data/c_link/c_ing.png);
}
.c_order1
{
    left: 450px;    
}
#order_data1
{
	min-width: 1169px;
	min-height: 800px;
}
#s_agent1
{
	width: 75px;
	height: 28px;
	position: absolute;
	top: 28px;
	left:710px;
	font-size: 18px;
}
</style>
