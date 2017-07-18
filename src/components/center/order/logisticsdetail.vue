<template>
<div>
	<div id="back1" @click="back">
       <img class="arrowwh" src="../../../assets/back.png">
       <span>物流详情</span>
    </div>
    <div class="licut">
  	   
    </div>
    <div class="detail">
      <div class="didangid"><span>订单号</span><span>：</span><span>00568269722</span></div>
      <div><span>下单时间</span><span>：2017年5月19日</span><span>22:35:55</span></div>
    </div>
    <div class="licut">
       
    </div>
    <div id="logcompany">
       <div id="productimg" class="logdiv">
         <img src="../../../assets/logistic/product.jpg">
       </div>
       <div class="logdiv">
          <div id="company" class="aboutcom">
            <span>承运公司：</span><span>顺丰速运</span>
          </div>
          <div id="logisticid" class="aboutcom">
            <span>运单编号：</span><span>27898797977</span>
          </div>
          <div id="tel" class="aboutcom">
            <span>官方电话：</span><span>0317-50413088</span>
          </div>
       </div>
       
    </div>
    <div class="licut">
       
    </div>
    <div id="companydetail">
      <div class="logodiv">
        <img id="logo" src="../../../assets/logistic/logcompanyLOGO.jpg">
      </div>
      <div class="logodiv" id="logtxt">
        <span>本数据由顺丰速运提供</span>
      </div>
        <img id="tocompanydetail" src="../../../assets/personcenter/arrow.png"> 
    </div>
    <div class="licut">
       
    </div>
    <bottombar></bottombar> 
</div>
	
</template>
<script>
import bottombar from '../../../components/bottombar'
export default {
  name: 'logisticsdetail',
  components: {
    bottombar
  },
  methods: {
    back () {
      this.$router.push({path: '/person'})
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
</style>
