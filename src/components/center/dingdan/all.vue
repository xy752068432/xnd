<template>
<div>
  <div class="licut">
  	   
   </div>
  <div class="content">
  <img id="selected4" src="../../../assets/alldingdan/selected.png">
     <div v-if= 'this.status4' class="mes">
     	{{this.mes4}}
     </div>
     <div v-else='this.status4' class="manymes">
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
                	<img class="buttonpay" src="../../../assets/alldd/wuliu.png">
                	<img class="buttoncancel" src="../../../assets/alldd/kefu.png">
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
      status4: true,
      mes4: ''
    }
  },
  created: function () {
    request.get(this.$route, {
      status: 0}, function (data) {
        console.log(data)
        this.mes4 = data.msg
        if (data.num === 0) {
          this.status4 = true
        } else {
          this.status4 = false
        }
      }.bind(this))
  }
}
</script>
<style>
#selected4
{
	width: 1.6rem;
	height: 0.04rem;
	position: absolute;
	top: 0;
	left: 7.8rem;
	z-index: 999;
}
</style>
