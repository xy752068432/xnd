<template>
  <div id="detail">
    <div class="swiper-wrap">  
    <swiper :options="swiperOption"  ref="mySwiper" class="swiper">  
       <!-- 这部分放你要渲染的那些内容 -->  
       <swiper-slide class="slide" v-for="(url,index) in goodsImg" :key="index"><div ><img :src="url"></div></swiper-slide>
       <!-- 这是轮播的小圆点 -->  
       <div class="swiper-pagination" slot="pagination"></div>
       
    </swiper>
        <!--左上角tag-->
       <div class="tag presale offsale "><p>{{this.txt}}</p></div>
       <!--热卖倒计时-->
       <div class="timeout">
           <div class="time-title"><p>距结束仅剩</p></div>
           <div class="time-remain"><p>{{goodsDetail.leave_end_time_text}}</p></div>    
       </div>
    </div>   
    <div class="detail-text">
        <h2 class="name">{{goodsDetail.title}}</h2>
        <p class="desc">{{goodsDetail.description}}</p>
        <p>
            <span class="attach">&yen;</span>
            <span class="price">{{goodsDetail.price}}</span>
            <span class="attach">/{{goodsDetail.unit}}</span>            
        </p>
        <p class="start-time">{{goodsDetail.sendtime}}</p>
    </div>
    <div class="btn-arrow">
        <img src="../assets/detail/bottom-arrow.png">
    </div>
    <div class="item-detail">
        <img :src="goodsDetail.detail">
    </div>    
    <div class="btn-line">
        <img src="../assets/detail/line-horzontail.png">
    </div>
    <!--<router-view></router-view>-->
    <addcart :goodsId="goodsId"></addcart>
    <!--加入购物车弹出层!暂时不用-->
    <div class="addcart-ok" v-show="false">
        <img src="../assets/detail/addcart-success.png" class="addcartsucc">
    </div>    
  </div>    
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import Toast from 'vue-easy-toast'
    import request from '@/common/request'
    import addcart from '../components/addcart'
    export default {
      name: 'detail',
      components: {
        swiper,
        swiperSlide,
        Toast,
        addcart
      },
      data () {
        return {
          swiperOption: {
           // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 30,
            onSlideChangeEnd: swiper => {
             // 这个位置放swiper的回调方法
            //  this.page = swiper.realIndex+1;
            //  this.index = swiper.realIndex;
            }
          },
          goodsId: '',
          goodsDetail: '',
          goodsImg: '',
          txt: ''
        }
      },
      // props: ['goodsId'],
      created: function () {
        // console.log('传过来的参数' + this.$route.query.goodsId)
        localStorage.setItem('token', '$2y$10$X7n0EEvR6itmxkRTVFbbYO3ksrPDG2S7ekr7XHNU.ODx3XA3EZrwC')
        this.goodsId = this.$route.query.goodsId
        request.get(this.$route, {goodsId: this.goodsId}, function (data) {
          this.goodsDetail = data.detail
          this.goodsImg = data.goods_imgs
          if (data.exp.text === null) {
            this.txt = data.category
          } else {
            this.txt = data.exp.text
          }
        }.bind(this))
      }
    }
</script>
<style>
    @import "../common/mixin.css";
    #detail{
        z-index: 200;
        margin-top: 1.49rem;
    }
    .swiper{
        width: 88.53%;
        height: 10rem;
    }
    .swiper img{
        width: 100%;
        height:8.8rem;
    }
    .swiper-pagination-bullet-active{
        background-color: #32ab42 !important;
    }
    .swiper-wrap{
        position: relative;
    }
    .swiper-wrap .tag{
        display: table;
        position: absolute;
        top: -.293333rem;
        left: 0.4666rem;
        width: 1.3066rem;
        height: 1.3066rem;
        color: #fff;
        background-size: cover;
        z-index: 100;
    }
    .swiper-wrap .tag p{
        display: table-cell;
        vertical-align: middle;
        width: 1.1rem;
        font-size: .3866rem;
        letter-spacing: 0;
    }
    .swiper-wrap .presale{
        background-image: url("../assets/detail/unsale.png");
    }
    .swiper-wrap .offsale{
        /*商品下架样式*/
        /*background-image: url("../assets/detail/offsale.png");*/
    }
    .swiper-wrap .timeout{
        width: 5.1rem;
        position: absolute;
        bottom: 1.2rem;
        left: 50%;
        transform: translate(-50%,0);
        font-size: 0;
        height: .5733rem;
        z-index: 100;
    }
    .swiper-wrap .time-title{
        display: inline-block;
        /*width:1.8533rem*/
        width: 1.9533rem;
        height: 100%;
        background-image: url("../assets/detail/time-red.png");
    }
    .time-title p{
        color: #fff;
        height: .5733rem;
        line-height: .5733rem;
        font-size: .293333rem;
    }
    .swiper-wrap .time-remain{
        display: inline-block;
        /*width:2.8666rem*/
        width: 3.0666rem;
        height: 100%;
        background-image: url("../assets/detail/time-gray.png");
    }
    .time-remain p{
        height: .5733rem;
        line-height: .5733rem;
        font-size: .24rem;
        color: #fff;
    }
    .detail-text{
        font-size: 0;
        letter-spacing: 0;
    }
    .detail-text .name{
        font-size: .666667rem;
        line-height: .693333rem;
        color: #000;
        margin-top: .586667rem;
    }
    .detail-text .desc{
        font-size: .3866rem;
        color: rgba(0,0,0,0.6);
        margin: .133333rem 0 .426667rem 0;
    }
    .detail-text .attach{
        font-size: .373333rem;
        color: #32ab42;        
    }
    .detail-text .price{
        font-size: .533333rem;
        font-weight: bold;
        color: #32ab42;        
    }
    .detail-text .old-price{
        font-size: .373333rem;
        text-decoration: line-through;
        color: rgba(0,0,0,0.6);
    }
    .detail-text .start-time{
        margin-top: .2533rem;
        font-size: .3866rem;
        color: #000;
        margin-bottom: 0.466rem;
    }
    .btn-arrow img{
        vertical-align: top
    }
    .item-detail{
        margin-top: 2.133333rem;
        width: 100%;
    }
    .item-detail img{
        width: 100%;
    }
    .btn-line{
        position: fixed;
        bottom: 1.43333rem;
        z-index: 2000;
    }
    .btn-line img{
        width: 88.53%;
    }
    .btn-bar{
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
    .addcart-ok{
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 200;
    }
    .addcart-ok img{
        width: 4.853333rem;
        height: 3.12rem;
    }
</style>
