<template lang="html">
  <div id="orderDetail">
        <div class="address">
            <div class="address-title"><img src="../assets/cart/address.png"><span>收货地址</span></div>
            <div class="address-name">宋海松松<span class="address-tel">15474587458</span></div>   
            <div class="address-text">湖南省长沙市岳麓区尖山小区902</div>
        </div>
        <div class="deliver">
            <div class="deliver-title">发货时间</div>
            <div class="deliver-time">
                <span class="deliver-date">预计2017年8月9日发货</span>
                <span class="deliver-day">约三天到货</span>
            </div>
        </div>
        <div class="orderStatus" v-show="payStatus">
            <ul>
                <li><span class="orderStatus-left">订单状态：</span><span class="orderStatus-right">已支付</span></li>
                <li><span class="orderStatus-left">订单号：</span><span class="orderStatus-right">2020382515</span></li>
                <li><span class="orderStatus-left">支付方式：</span><span class="orderStatus-right">微信支付</span></li>
                <li><span class="orderStatus-left">支付时间：</span><span class="orderStatus-right">2017-05-15 13:55:12</span></li>
            </ul>
        </div>
        <div class="order-list">
            <ul>
                <li class="list-title">订单详情</li>
                <li><span class="list-left">订单总价：</span><span class="list-right">&yen;110.00</span></li>
                <li><span class="list-left">配送费：</span><span class="list-right">&yen;00.00</span></li>
                <li><span class="list-left">优惠码：</span><span class="list-right">-&yen;00.00</span></li>
                <li><span class="list-left">阳澄湖大闸蟹：</span><span class="list-right-item"><span class="amount">3只</span><span class="price">&yen;55.00</span></span></li>
                <li><span class="list-left">潜江大闸蟹：</span><span class="list-right-item"><span class="amount">1份</span><span class="price">&yen;55.00</span></span></li>                
            </ul>
        </div>
        <div class="toCheck">
            <span class="check-all-money">合计：&yen;110.00</span>
            <span class="check-btn" :class="payStatus ? 'pay' : 'unpay' ">等待收货</span>
        </div>        
        <bottombar></bottombar>                      
  </div>
</template>
<script>
import bottombar from '../components/bottombar'
export default {
  data () {
    return {
      payStatus: false
    }
  },
  components: {
    bottombar
  },
  created: function () {
  }
}
</script>
<style scoped>
    @import "../common/mixin.css";  
    #orderDetail{
        margin-top: .983333rem;
        position: relative;
    }
    .address{
        z-index: 200;
        background-color: #fff;
        padding: .426667rem .573333rem;
        height: 2.706666rem;
        text-align: left;
        position: relative;
        border-bottom: .026667rem solid #ecedef; 
        box-sizing: border-box;
    }
    .address div{
        font-size: 0;
        letter-spacing: 0;
    }
    .address-title{
        margin-bottom: .293333rem;
    }
    .address-title span{
        font-size: .413333rem;
    }
    .address-title img{
        vertical-align: bottom;
        margin-right: .133333rem;
        width: .32rem;
        height: .413333rem;
    }
    .address .address-name{
        font-size: .48rem;
    }
    .address .address-tel{
        margin-left: .573333rem;
        font-size: .346667rem;
    }
    .address .address-text{
        font-size: .306666rem;
        margin-top: .213333rem
    }
    .address .right-arrow{
        position: absolute;
        right: .573333rem;
        top:1.173333rem;
        width: .2rem;
        height: .333333rem;
    }
    .deliver{
        font-size: 0;
        height: 1.853333rem;
        padding: .373333rem .573333rem;
        box-sizing: border-box;
        border-bottom: .026667rem solid #ecedef; 
    }
    .deliver .deliver-title{
        text-align: left;
        font-size: .413333rem;
        margin-bottom: .28rem;
    }
    .deliver .deliver-time{
        font-size: .413333rem;
    }
    .deliver .deliver-time .deliver-date{
        float: left;
    }
    .deliver .deliver-time .deliver-day{
        float: right;
    }    
    .orderStatus{
        padding: .373333rem .573333rem;
        box-sizing: border-box;
        font-size: 0;
        letter-spacing: 0;
        border-bottom: .026667rem solid #ecedef;         
    }
    .orderStatus li span{
        font-size: .413333rem;
    }
    .orderStatus li{
        margin-bottom: .373333rem;
    }
    .orderStatus li::after{
        display: block;
        content: '';
        height: 0;
        clear:both;
        overflow: hidden;
        visibility: hidden;
    }
    .orderStatus li .orderStatus-left{
        float: left;
    }
    .orderStatus li .orderStatus-right{
        float: right;
    }
    .order-list{
        padding: .373333rem .573333rem;
        box-sizing: border-box;
        font-size: 0;
        letter-spacing: 0;
    }
    .order-list .list-title{
        text-align: left;
        font-size: .413333rem;
    }
    .order-list li span{
        font-size: .413333rem;
    }
    .order-list li{
        margin-bottom: .373333rem;
    }
    .order-list li::after{
        display: block;
        content: '';
        height: 0;
        clear:both;
        overflow: hidden;
        visibility: hidden;
    }
    .order-list li .list-left{
        float: left;
    }
    .order-list li .list-right{
        float: right;
    }
    .order-list li .list-right-item{
        width: 40%;
        float: right;
    }
    .order-list li .list-right-item .amount{
        float: left
    }
    .order-list li .list-right-item .price{
        float: right;
    }    
    .toCheck{
        position: fixed;
        bottom: 1.5856rem;
        width: 100%;
        height: 1.3733333rem;
        padding: 0 .573333rem;
        border-top: .026667rem solid #ecedef; 
        box-sizing: border-box;
        font-size: 0;
        background-color: #fff;
    }
    .toCheck .check-all-money{
        float: left;
        margin-top: .48rem;
        font-size: .466666rem;
    }
    .toCheck .check-btn{
        float: right;
    }    
    .toCheck .pay{
        font-size: .466666rem;
        color: rgb(50,171,66);
        margin-top: .453333rem;        
    }
    .toCheck .unpay{
        margin-top: .306666rem;
        width: 3.08rem;
        height: .746667rem;
        background-image:url("../assets/cart/toCheck.png");
        background-size: 100% 100%; 
    }      
</style>
