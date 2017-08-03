<template>
<div>
 <headerbar></headerbar>
	<div id="back1" @click="back">
       <img class="arrowwh" src="../../../assets/back.png">
       <span>物流详情</span>
    </div>
    <div class="licut">
  	   
    </div>
    <div class="detail">
      <div class="didangid"><span>订单号</span><span>：</span><span>{{this.order_num}}</span></div>
      <div><span>下单时间：</span><span>{{this.created_at}}</span></div>
    </div>
    <div class="licut">
       
    </div>
    <div id="logcompany">
       <div id="productimg" class="logdiv">
         <img :src="this.goods_img" @click="togooddetail(goods_id)">
       </div>
       <div class="logdiv">
          <div v-for="express in data.express_info" class="aboutcom">
            <span>{{express.name}}</span><span>{{express.value}}</span>
          </div>
       </div>
       
    </div>
    <div class="licut">
       
    </div>
    <div id="companydetail">
      <div class="logodiv">
        <img id="logo" :src="this.express_img">
      </div>
      <div class="logodiv" id="logtxt">
        <span>{{this.text}}</span>
      </div>
        <img id="tocompanydetail" src="../../../assets/personcenter/arrow.png"> 
    </div>
    <div class="licut">
       
    </div>
    <div class="logisticdetail"> 
      <img id="arr" src="../../../assets/logistic/arrving.png">
      <div class="logisticdetail1" v-for="traces in traces">
          <div class="statusbar logcontent">
             <img  src="../../../assets/logistic/status.png"> 
          </div>
          <div class="logcontent logisticdetailtxt">
             <ul>
               <li>
                 <div class="txts">
                   <span>{{traces.AcceptStation}}</span>
                 </div>
                 <div class="timetxt">
                   <span>{{traces.AcceptTime}}</span>
                 </div>
               </li>
             </ul>
          </div>
        <div class="lognow">
          <img src="../../../assets/logistic/willarr.png"> 
        </div>
      </div>
        
    </div>
    <bottombar></bottombar> 
</div>
	
</template>
<script>
import bottombar from '../../../components/bottombar'
import headerbar from '../../../components/headerbar'
import request from '../../../common/request'
export default {
  name: 'logisticsdetail',
  components: {
    bottombar,
    headerbar
  },
  data () {
    return {
      data: [],
      traces: [],
      order_num: '',
      created_at: '',
      goods_img: '',
      express_img: '',
      text: '',
      goods_id: ''
    }
  },

  created: function () {
    request.get(this.$route, {
      order_id: this.$route.query.order_id}, function (data) {
        this.data = data
        this.order_num = data.order_info.order_num
        this.created_at = data.order_info.created_at
        this.goods_img = data.goods_info.goods_img
        this.express_img = data.data_provide.express_img
        this.text = data.data_provide.text
        this.goods_id = data.goods_info.goods_id
        for (var i = data.traces.length - 1; i >= 0; i--) {
          this.traces.push(data.traces[i])
        }
      }.bind(this))
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    },
    togooddetail: function (goodid) {
      this.$router.push({path: '/detail?goodsId=' + goodid})
    }
  }
}
</script>
<style>
#back1
{
	margin-top: 0.96rem;
	width: 100%;
	height: 1.24rem;
	text-align: left;
}
.arrowwh
{
	width: 0.2rem;
	height: 0.333333rem;
}
#back1 img
{
	margin-left: 0.6rem;
	margin-right: 0.6rem;
}
#back1 span
{
	font-size: 0.4rem;
}
.licut
{
  width: 100%;
  height: 0.04rem;
  background: url(../../../assets/licut.png);
}
.detail
{
  width: 80%;
  height:1.173333rem;
  text-align: left;
  margin-top: 0.32rem;
  margin-left: 0.573333rem;
  font-size: 0.32rem;
  color: #ADADAD;
}
.didangid
{
  margin-bottom: 0.186667rem;
}
#logcompany
{
  margin-top: 0.333333rem;
  margin-left: 0.573333rem;
  height: 1.773333rem;
}
#productimg img
{
  width: 1.44rem;
  height: 1.44rem;
}
.logdiv
{
  float: left;
}
.aboutcom
{
  font-size: 0.32rem;
  text-align: left;
  margin-left: 0.253333rem;
  margin-bottom: 0.173333rem;
}
#company
{
  padding-top: 0.066667rem;
}
#companydetail
{
  text-align: left;
  margin-top: 0.2rem;
  margin-left: 0.573333rem;
  height: 0.72rem;
  position: relative;
}
#logtxt
{
  margin-top: 0.093333rem;
  margin-left: 0.253333rem;
}
#companydetail #logo
{
  width: 0.52rem;
  height: 0.52rem;
}
.logodiv
{
  float: left;
  font-size: 0.333333rem;
}
#tocompanydetail
{
  width: 0.2rem;
  height: 0.333333rem;
  position: absolute;
  top:0.08rem;
  right: 0.573333rem;
}
.logisticdetail
{
  position: relative;
  height: 9rem;
  width: 92%;
  overflow: auto;
  text-align: left; 
  margin-top: 0.453333rem;
  padding-left: 0.813333rem;
}
.logisticdetail1
{
  height: 1.626667rem;
  position: relative;
}
.statusbar
{
  height: 1.626667rem;
}
.statusbar img
{
  height: 1.626667rem;
}
.logcontent
{
  float: left;
}
.logisticdetailtxt
{
  padding-left: 0.506667rem;
}
.txts
{
  width: 8.0rem;
  font-size: 0.373333rem;
}
.timetxt
{
  padding-top: 0.213333rem;
  font-size: 0.266667rem;
}
.lognow
{
  position: absolute;
  top: -0.67rem;
  left: -0.1rem;
}
.lognow img
{
  width: 0.2rem;
  height: 0.2rem;
}
#arr
{
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0.64rem;
  width: 0.373333rem;
  height: 0.373333rem;
}
</style>
