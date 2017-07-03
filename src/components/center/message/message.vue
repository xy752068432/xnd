<template>
	<div>
	  <div id="meslist">
		<ul>
		  <li class="meslist1">
			<div class="meslist2">
			  <div class="mesimg">
				<img src="../../../assets/message/logistics.png">
			  </div>
			  <div class="mestype">
			  	<span>物流通知</span>
			  </div>
			  <div class="mestime">
			  	<span>13:30:37</span>
			  </div>
			  <div class="mestxt">
			  	<p>你的商品已发货，下一站北京三北京三里北京三</p>
			  </div>
			</div>
			<div class="licut">
  	   
            </div>
		  </li>
		  <li class="meslist1">
			<div class="meslist2">
			  <div class="mesimg">
				<img src="../../../assets/message/moneycard.png">
			  </div>
			  <div class="mestype">
			  	<span>代金券</span>
			  </div>
			  <div class="mestime">
			  	<span>2017-5-17</span>
			  </div>
			  <div class="mestxt">
			  	<p>你的商品已发货，下一站北京三里屯</p>
			  </div>
			</div>
			<div class="licut">
  	   
            </div>
		  </li>
		  <li class="meslist1">
			<div class="meslist2">
			  <div class="mesimg">
				<img src="../../../assets/message/newproduct.png">
			  </div>
			  <div class="mestype">
			  	<span>新品上架</span>
			  </div>
			  <div class="mestime">
			  	<span>2017-4-17</span>
			  </div>
			  <div class="mestxt">
			  	<p>阳澄湖大闸蟹已经上架，赶快购买</p>
			  </div>
			</div>
			<div class="licut">
  	   
            </div>
		  </li>
		</ul>
	  </div>
	<bottombar></bottombar> 	
	</div>
</template>
<script>
import bottombar from '../../../components/bottombar'
export default {
  name: 'message',
  components: {
    bottombar
  }
}
</script>
<style>
.licut
{
  width: 100%;
  height: 0.04rem;
  background: url(../../../assets/licut.png);
}
#meslist
{
	width: 100%;
	height: auto;
	overflow-y:auto; 
	margin-top: 0.973333rem;
}
.meslist1
{
	width: 100%;
}
.meslist2
{
	height: 2.026667rem;
}
.meslist2 div
{
   float: left;
}
.mesimg
{
	width: 1.24rem;
   height: 1.24rem;
   margin:0.386667rem 0.24rem 0.386667rem 0.573333rem;
}
.mesimg img
{
   width: 1.24rem;
   height: 1.24rem;
}
.mestype
{
	font-size: 0.44rem;
	text-align: left;
	color: black;
	width: 2.0rem;
	margin:0.493333rem 3.122rem 0.226667rem 0;
}
.mestime
{
	font-size: 0.24rem;
	width: 2.15rem;
	margin-top:0.693333rem; 
	color: #ADADAD;
	text-align: right;
}
.mestxt
{
	font-size: 0.36rem;
	width: 7.1rem;
	color: #ADADAD;
	text-align: left;
}
.mestxt p
{
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
