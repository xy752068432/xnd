<template lang="html">
    <div id="cart">
        <!--收货地址-->
        <div class="address">
           <div class="address-name">宋海松松<span class="address-tel">15474587458</span></div>
           
          <div class="address-text">湖南省长沙市岳麓区尖山小区902</div>
          <img src="../assets/cart/right-arrow.png" class="right-arrow">
        </div>
        <!--购物车-->
        <div class="cart-item">
        <scroller
          :on-refresh="refresh"
          :on-infinite="infinite"
          style="padding-top: 0.966rem;padding-bottom: 24px;">           
          <ul>
            <li class="cart-item-wrap">
              <div class="icon">
                <div class="choose"></div>
                <div class="icon-logo">
                  <div class="tag"><p>促销<br>热卖</p></div>
                  <img src="../assets/cart/item.png">
                </div>  
              </div>
              <div class="content">
                <h2 class="name">阳澄湖大闸蟹</h2>
                <p class="desc">肉鲜肥美 苏州直供</p>
                <p class="price-line"><span class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></span><span class="old-price">&yen;30.5/只</span></p>
                <p class="deliver-time">预计8月15发货</p>
              </div>
              <div class="amount">
                <span class="btn-minus"></span>
                <input class="amount-num" type="number" value="999"></input>
                <span class="btn-plus"></span>
              </div>      
            </li>
          </ul>
        </scroller>    
        </div>
        <bottombar></bottombar>
    </div>    
</template>
<script>
import utils from '../common/utils'
import VueScroller from 'vue-scroller'
import bottombar from '../components/bottombar'
export default {
  components: {
    bottombar,
    VueScroller
  },
  methods: {
    refresh: function (done) {
      setTimeout(() => {
        done()
        utils.toToast('刷新成功')
      }, 500)
    },
    infinite: function (done) {
      setTimeout(() => {
        done(true)
      }, 500)
    }
  }
}
</script>
<style scoped>
  @import "../common/mixin.css";
  #cart{
    margin-top: .983333rem;
  }
  .address{
    z-index: 200;
    background-color: #fff;
    padding: .413333rem .573333rem;
    height: 1rem;
    text-align: left;
    position: relative;
    border-bottom: .026667rem solid #ecedef; 
  }
  .address div{
    font-size: 0;
    letter-spacing: 0;
  }
  .address .address-name{
    font-size: .466666rem;
  }
  .address .address-tel{
    margin-left: .573333rem;
    font-size: .33333rem;
  }
  .address .address-text{
    font-size: .306666rem;
    margin-top: .213333rem
  }.address .right-arrow{
    position: absolute;
    right: .573333rem;
    top:.746667rem;
    width: .2rem;
    height: .333333rem;
  }
  ._v-container{
    margin-top: 1.84rem !important;
  }
  .cart-item-wrap{
    padding: .4666rem 5.73%;
    width: 100%;
    height: 2.96rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ecedef;
  }
  .cart-item-wrap *{
    margin: 0;
  }
  .icon{
    display: inline-block;
    float: left;
    height: 100%;
    width: 34.64%;
    margin-right: 2.666667%;
  }
  .icon .choose{
    display: inline-block;
    float: left;
    width: .586667rem;
    height: .586667rem;
    margin-top: .746667rem;
    margin-right: 9.11%;
    background-size: 100% 100%;
    background-image: url("../assets/cart/unchoose.png");
    background-repeat: no-repeat
  }
  .icon .icon-logo{
    position: relative;
    display: inline-block;
    float: left;
    width: 71.72%;
    height: 2.06666rem;
  }
  .icon-logo .tag{
    display: table;
    position: absolute;
    top: -.186667rem;
    left:-.186667rem;
    width: .82666rem;
    height: .82666rem;
    background-image: url("../assets/cart/presale.png");
    background-size: 100% 100%;
  }
  .icon-logo .tag p{
    color: #fff;
    display: table-cell;
    vertical-align: middle;
    font-size: .2266rem;
  }
  .icon-logo img{
    width: 100%;
    height: 100%;
  }
  .content{
    display: inline-block;
    float: left;
    height: 100%;
    width: 34.59%;
    padding-right: 2.9333%;
    letter-spacing: 0;
    font-size: 0;
    border-right: .026667rem solid #32ab42;
  }
  .content .name{
    font-size: .493333rem;
    margin-bottom: .16rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content .desc{
    font-size: .28rem;
    color: rgba(0,0,0,0.6);
    margin-bottom: .293333rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content .price-line{
    margin-bottom: .106667rem
  }
  .content .price{
    font-size: .36rem;
    font-weight: bold;
    color: #32ab42;
  }
  .content .old-price{
    font-size: .28px;
    text-decoration: line-through;
  }
  .content .price .attach{
    font-size: .293333rem;
  }
  .content .deliver-time{
    font-size: .25333rem;
  }
  .amount{
    display: inline-block;
    float: left;
    width: 21.1%;
    margin-left: 3.3333%;
    margin-top: .773333rem
  }
  .amount span,.amount input{
    display: inline-block;
    float: left;
  }
  .amount .amount-num{
    width: .746667rem;
    font-size: .4rem;
    font-weight: bold;
    margin-left: .026667rem;
    margin-right: .026667rem;
    margin-top: .07rem;
    outline: none;
    text-align: center
  }
  .btn-minus{
    display: block;
    width: .533333rem;
    height: .533333rem;
    background-image: url("../assets/cart/tag-minus.png");
    background-size: 100% 100%;
  }
  .btn-plus{
    display: block;
    width: .533333rem;
    height: .533333rem;
    background-image: url("../assets/cart/tag-plus.png");
    background-size: 100% 100%;
  }
</style>
