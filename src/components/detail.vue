<template>
  <div id="detail">
    <swiper :options="swiperOption"  ref="mySwiper" class="swiper">  
       <!-- 这部分放你要渲染的那些内容 -->  
       <swiper-slide class="slide"><div><img src="../assets/detail/item1.jpg"></div></swiper-slide>
       <swiper-slide class="slide"><div><img src="../assets/detail/item2.jpg"></div></swiper-slide> 
       <swiper-slide class="slide"><div><img src="../assets/detail/item3.jpg"></div></swiper-slide>   
       <!-- 这是轮播的小圆点 -->  
       <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>      
    <div class="detail-text">
        <h2 class="name">阳澄湖大闸蟹</h2>
        <p class="desc">肉鲜肥美 苏州直供</p>
        <p>
            <span class="attach">&yen;</span>
            <span class="price">25.5</span>
            <span class="attach">/只</span>            
        </p>
        <p class="start-time">预计8月15日发货</p>
    </div>
    <div class="btn-arrow">
        <img src="../assets/detail/bottom-arrow.png">
    </div>
    <div class="btn-line">
        <img src="../assets/detail/line-horzontail.png">
    </div> 
    <div class="btn-bar">
    </div>          
  </div>    
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
      name: 'detail',
      components: {
        swiper,
        swiperSlide
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
          }
        }
      }
    }
</script>
<style>
    @import "../common/mixin.css";
    #detail{
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
    .btn-line{
        position: fixed;
        bottom: 1.43333rem;
        z-index: 2000;
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
</style>
