<template lang="html">
  <div id="order">
        <div class="address">
            <div class="address-title"><img src="../assets/cart/address.png"><span>收货地址</span></div>
            <div class="address-name">宋海松松<span class="address-tel">15474587458</span></div>   
            <div class="address-text">湖南省长沙市岳麓区尖山小区902</div>
            <img src="../assets/cart/right-arrow.png" class="right-arrow">
        </div>
        <div class="deliver">
            <div class="deliver-title">发货时间</div>
            <div class="deliver-time">
                <span class="deliver-date">预计2017年8月9日发货</span>
                <span class="deliver-day">约三天到货</span>
            </div>
        </div>
        <div class="discount">
            <div class="discount-title">优惠码</div>
            <div class="discount-detail">暂无可用优惠码</div>
            <img src="../assets/cart/right-arrow.png" class="right-arrow" @click="toastShow">
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
            <span class="check-btn"></span>
        </div>
        <!--优惠码输入弹窗-->
        <transition name="fade">
            <div class="mask" v-show="toastDisplay">
                <div class="discount-toast" v-show="toastDisplay">
                    <input type="text" placeholder="请输入优惠码">
                    <div class="discount-toast-confirm">
                        <div class="btn" @click="toastShow">取消</div>
                        <div class="btn">确认</div>
                    </div>    
                </div>
            </div>    
        </transition>
  </div>
</template>
<<script>
export default {
  data () {
    return {
      toastDisplay: false
    }
  },
  methods: {
    toastShow: function () {
      this.toastDisplay = !this.toastDisplay
    }
  }
}
</script>
<style>
    @import "../common/mixin.css";  
    #order{
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
    .deliver, .discount{
        font-size: 0;
        height: 1.853333rem;
        padding: .373333rem .573333rem;
        box-sizing: border-box;
        border-bottom: .026667rem solid #ecedef; 
    }
    .deliver .deliver-title , .discount .discount-title{
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
    .discount{
        position: relative;
    }
    .discount .discount-detail{
        font-size: .413333rem;
        text-align: left;
    }
    .discount img{
        position: absolute;
        bottom: .4rem;
        right: .573333rem;
        width: .2rem;
        height: .333333rem;
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
        bottom: 0;
        width: 100%;
        height: 1.533333rem;
        padding: 0 .573333rem;
        border-top: .026667rem solid #ecedef; 
        box-sizing: border-box;
        font-size: 0;
        background-color: #fff;
    }
    .toCheck .check-all-money{
        float: left;
        margin-top: .533333rem;
        font-size: .466666rem;
    }
    .toCheck .check-btn{
        float: right;
        margin-top: .386666rem;
        width: 3.08rem;
        height: .746667rem;
        background-image:url("../assets/cart/toCheck.png");
        background-size: 100% 100%; 
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
    .mask{
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0.6);
    }
    .discount-toast{
        z-index: 2000;
        width: 60%;
        height: 2.666667rem;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 3px;
        transition: 2s;
    }
    .discount-toast input{
        width: 80%;
        height: .64rem;
        outline: none;
        border: 1px solid #ecedef;
        font-size: .373333rem;
        line-height: .64rem;
    }
    .discount-toast .discount-toast-confirm{
        width: 100%;
        position: absolute;
        bottom: 0;
        padding: .133333rem 0;
    }
    .discount-toast .discount-toast-confirm .btn{
        cursor: pointer;
        float: left;
        width: 50%;
        font-size: .48rem;
        color: #31ab43;
        text-align: center;
    }
</style>
