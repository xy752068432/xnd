<template>
<div>
    <div id="toggle">
    <router-link to="/person">
    <div id="back">
      <img class="arrowwh" src="../../../assets/back.png">
    </div>
    </router-link>
    <ul id="dingdanlist">
    <li class="right" @click="statuss(1)">待付款</li>
    <li class="right" @click="statuss(2)">待发货</li>
    <li class="right" @click="statuss(3)">待收货</li>
    <li @click="statuss(0)">全部订单</li>
    </ul>
   </div>
   <orderchild v-if="true" v-bind:statuss='clickstatus'></orderchild>
   <bottombar></bottombar>
 </div>
</template>
<script>
import bottombar from '../../../components/bottombar'
import orderchild from '../../../components/center/order/orderchild'
export default {
  name: 'order',
  components: {
    bottombar,
    orderchild
  },
  data: function () {
    return {
      clickstatus: ''
    }
  },
  created: function () {
    this.status = this.$route.query.status
  },
  methods: {
    statuss: function (data) {
      if (data === 1) {
        this.clickstatus = 1
      } else if (data === 2) {
        this.clickstatus = 2
      } else if (data === 3) {
        this.clickstatus = 3
      } else if (data === 0) {
        this.clickstatus = 0
      }
    }
  }
}
</script>
<style>
*{
	padding: 0;
	margin: 0;
}
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
