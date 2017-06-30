<template>
  <div class="addcart">
        <div class="btn-bar-wrap">
            <router-link to='/'>
            <div class="btn-home btn">
                <div class="img-wrap"><img src="../assets/detail/item-home.png"></div>
                <p class="btn-title">首页</p>
            </div>
            </router-link>
            <router-link to='/cart'>
            <div class="btn-cart btn">
                <div class="img-wrap"><img src="../assets/detail/cart.png"><div class="cart-amount"><p class="cart-amount-num">88</p></div></div>
                <p class="btn-title">购物车</p>
            </div>
            </router-link> 
            <div class="btn-addCart onsale saleout" @click="addCart">
                
            </div>
        </div>     
  </div>     
</template>
<script>
    import utils from '../common/utils'
    import request from '@/common/request'
    // import axios from 'axios'
    export default {
      name: 'addcart',
      methods: {
        addCart: function () {
          request.post(this.$route, {goods_id: localStorage.getItem('goodsId'), goods_num: 1}, function (data) {
            console.log(data)
          })
        //   axios.post('/api/v1/user/2/goods_car', {
        //     headers: {'Authorization': localStorage.getItem('token')}
        //     // goods_num: 1
        //   })
        //   .then((res) => {
        //     console.log(res)
        //   })
        // var data = {
        //   'goods_id': localStorage.getItem('goodsId'),
        //   'goods_num': 1
        // }
        // axios.request({
        //   method: 'post',
        //   url: '/api/v1/user/2/goods_car',
        //   data: data,
        //   timeout: 5000,
        //   headers: {
        //   'Authorization': localStorage.getItem('token')
        //   }
        // })
          utils.toToast('加入购物车成功')
        }
      }
    }
</script>
<style>
    .addcart{
        background-color: #fff;
        width: 100%;
        height: 1.633333rem;
        line-height: 1.493333rem;
        position: fixed;
        bottom: 0;
        z-index: 1000;
    }
    .btn-bar-wrap{
        width: 88.53%;
        height: 100%;
        margin: 0 auto;
        font-size: 0;
    }
    .btn-bar-wrap .btn{
        display: inline-block;
        margin-top: 0.2333rem;
        float: left;
    }
    .btn-bar-wrap .btn img{
        width: 100%;
        height: 100%;
    }
    .btn-bar-wrap .btn .btn-title{
        font-size: .266667rem;
        text-align: center;
        line-height: .266667rem;
        margin-top:.24rem;
    }
    .btn-bar-wrap .img-wrap{
        width: .7066rem;
        height: .7066rem;
        margin: 0 auto;
    }
    .btn-home{
        padding-right: 0.4666rem;
        border-right: .053333rem solid #ecedef;
    }
    .btn-cart{
        margin-left: 0.4666rem;
    }
    .btn-cart .img-wrap{
        position: relative
    }
    .btn-cart .cart-amount{
        position: absolute;
        display: table;
        width: 0.4666rem;
        height: 0.4666rem;
        background-image: url("../assets/detail/cart-amount.png");
        background-size: cover;
        top: -.08rem;
        right: -.213333rem
        
    }
    .cart-amount .cart-amount-num{
        display: table-cell;
        vertical-align: middle;
        letter-spacing: 0;
        font-size: 0.2266rem;
        line-height: 0.4666rem;
        color: #fff;
    }
    .btn-addCart{
        width: 3.08rem;
        height: .7066rem;
        background-size: 100% 100%;
        margin-top: .45rem;
        float: right;
    }
    .onsale{
        background-image: url("../assets/detail/add-cart.png");
    }
    .saleout{
        /*商品下架样式*/
        /*background-image: url("../assets/detail/saleout.png");*/
    }
</style>

