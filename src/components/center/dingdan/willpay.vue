<template>
<div>
   <div class="licut">
  	   
   </div>
   <div class="content">
    <img id="selected1" src="../../../assets/alldingdan/selected.png">
     <div v-if="this.status1" class="mes">
     	{{this.mes1}}
     </div>
     <div v-else="!this.status1" class="manymes">
     	<ul>
     		<li>
     			<div class="detail">
     				<div class="didangid"><span>订单号</span><span>：</span><span>00568269722</span></div>
     				<div><span>下单时间</span><span>：</span><span>2017年5月19日</span><span>       22:35:55</span></div>
     			</div>
     			
                <div class="gooddetail">
                	<ul>
                		<li>
                		    <div class="licut">
  	   
                            </div>
                			<div class="good">
                				<div class="goodlist"><img src="../../../assets/willpay/product.jpg"></div>
                				<div class="goodlist goodtxt"><div class="goodtxt1">阳澄湖大闸蟹</div><div class="goodtxt2">苏州阳澄</div></div>
                				<div class="goodnum">X2(只)</div>
                				<div class="goodmoney">￥55.00</div>
                				<img class="togooddetail" src="../../../assets/personcenter/arrow.png">
                			</div>
                		</li>
                	</ul>
                </div>
                <div class="fine"><div><span>配送费</span></div><div class="finemoney">￥10.00</div></div>
                <div class="licut">
  	   
                </div>
                <div class="goodtotal">
                   <div class="totalnum"><span class="totaltxt">共99件商品</span></div>
                   <div class="totalmoney"><span class="totaltxt">合计：￥1100.00</span><span class="totaltxt1">(含运费￥0.00)</span></div>
                </div>
                 <div class="licut">
  	   
                </div>
                <div class="goodbutton">
                	<img class="buttonpay" src="../../../assets/willpay/pay.png">
                	<img class="buttoncancel" src="../../../assets/willpay/cancel.png">
                </div>
                <div class="bigcut">
  	   
                </div>
     		</li>
     	</ul>
     </div>
   </div>
 </div>
</template>
<script>
import request from '../../../common/request'
export default {
  data: function () {
    return {
      status1: true,
      mes1: '',
      goods: []
    }
  },
  created: function () {
    request.get(this.$route, {
      status: 1}, function (data) {
        console.log(data)
        // console.log(data.items.length)
        this.mes1 = data.msg
        if (data.num === 0) {
          this.status1 = true
        } else {
          this.status1 = false
          for (var i = 0; i < data.items.length; i++) {
            this.goods.push(data.items)
          }
        }
      }.bind(this))
    // console.log(this.goods)
  }
}
</script>
<style>
*{
	padding: 0;
	margin: 0;
}
.content
{
	width:100%;
	height: 14rem;
	overflow-y: auto;
	position: relative;
}
#selected1
{
	width: 1.253333rem;
	height: 0.04rem;
	position: absolute;
	top: 0;
	left: 1.3rem;
	z-index: 999;
}
.mes
{
	padding-top:3.346667rem; 
	height:1.333333rem;
	width:5.333333rem;
	margin: 0 auto;
	font-size: 0.413333rem;
}
.manymes
{
    width:100%;
	height: 13.9rem;
	overflow-y: auto;
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
.licut
{
  width: 100%;
  height: 0.04rem;
  background: url(../../../assets/licut.png);
}
.good
{
	margin-left: 0.573333rem;
    padding-top: 0.253333rem;
    height: 1.266667rem;
    position: relative;
}
.good .goodlist
{
	float: left;
}
.goodtxt
{
	text-align: left;
	margin-left: 0.2rem;
	margin-top: 0.04rem;
}
.goodtxt1
{
	font-size: 0.413333rem;
}
.goodtxt2
{
	font-size: 0.32rem;
	color: #ADADAD;
	margin-top: 0.226667rem;
}
.goodlist img
{
	width: 1.026667rem;
	height: 1.026667rem;
}
.goodnum
{
	font-size: 0.36rem;
	position: absolute;
	bottom: 0.586667rem;
	right:3.893333rem;
}
.goodmoney
{
	font-size: 0.36rem;
	position: absolute;
	bottom: 0.586667rem;
	right:1.08rem;
}
.togooddetail
{
	position: absolute;
	bottom: 0.586667rem;
	right:0.573333rem;
	width:0.2rem;
	height: 0.333333rem;
}
.fine
{
	width: 93%;
	height:0.586667rem;
	margin-top: 0.16rem;
	padding-left: 0.573333rem;
	font-size: 0.32rem;
}
.fine div
{
	float: left;
}
.finemoney
{
	margin-left: 6.7666rem;
}
.goodtotal
{
	width: 100%;
	height: 0.813333rem;
	position: relative;
}
.totalnum
{
	position: absolute;
	height: 0.813333rem;
	left: 0.573333rem;
	top: -0.333333rem;
}
.totalmoney
{
	position: absolute;
	height: 0.813333rem;
	right: 0.573333rem;
	top: -0.333333rem;
}
.goodtotal .totaltxt
{
	font-size: 0.4rem;
}
.goodtotal .totaltxt1
{
	font-size: 0.333333rem;
}
.goodbutton
{
	height: 0.973333rem;
	width: 100%;
	position: relative;
}
.goodbutton img
{
	width: 2.173333rem;
	height: 0.626667rem;
	position: absolute;
	top:0.173333rem;
}
.buttonpay
{
	right: 3.226667rem;
}
.buttoncancel
{
	right: 0.573333rem;
}
.bigcut
{
  width: 100%;
  height: 0.24rem;
  background: url(../../../assets/willpay/bigcut.png);
}
</style>
