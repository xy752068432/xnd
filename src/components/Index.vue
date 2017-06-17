<template lang="html">
    <div id="home">

      <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
        style="padding-top: 0.966rem;padding-bottom: 24px;"> 
      <ul>
        <li class="goods-item" @click="toItem">
          <div class="icon">
            <div class="tag"><p>促销<br>热卖</p></div>
            <div class="sale-time"><p>2017年05月09日24:00出售</p></div>
              <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
        <li class="goods-item">
          <div class="icon">
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
        <li class="goods-item">
          <div class="icon">
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
        <li class="goods-item">
          <div class="icon">
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
        <li class="goods-item">
          <div class="icon">
            <img src="../assets/goods.png" >
          </div>
          <div class="content">
            <h2 class="name">阳澄湖大闸蟹阳澄湖大闸蟹</h2>
            <p class="desc">肉鲜肥美 苏州直供</p>
            <p class="old-price"><span class="old-attach">&yen;</span>30.5<span class="old-attach">/只</span></p>
            <p class="price"><span class="attach">&yen;</span>25.5<span class="attach">/只</span></p>
            <a class="toCart"></a>
          </div>
        </li>
      </ul>
      </scroller>
      
      <bottombar></bottombar>
      <!--回到顶部-->
      <div class="toTop" @click="toTop"></div>
    </div> 
</template>
<script>
    import utils from '../common/utils'
    import VueScroller from 'vue-scroller'
    import bottombar from '../components/bottombar'
    import Toast from 'vue-easy-toast'
    console.log(utils)
    // console.log(VueScroller.Scroller)
    export default{
      name: 'home',
      components: {
        VueScroller,
        bottombar,
        Toast
      },
      data: function () {
        return {
          loadStatus: false
        }
      },
      methods: {
        toTop () {
          console.log('totop')
          VueScroller.scrollTo(0, 0)
          // utils.toTop()
          // document.body.scrollTop = 0
        },
        toItem () {
          this.$router.push({path: '/detail'})
        },
        refresh: function (done) {
          setTimeout(() => {
            done()
            utils.toToast('刷新成功')
          }, 1500)
        },
        infinite: function (done) {
          setTimeout(() => {
            done()
            utils.toToast('加载成功')
          }, 1500)
        }
      }
    }
</script>
<style scoped>
  @import "../common/mixin.css";
  #home{
    margin-top: 1.19rem;
    margin-bottom: 1.89rem;
  }
  .goods-item{
    width: 100%;
    height: 4.49rem;
    border-bottom: 1px solid #c0d4d5;
  }
  .icon{
    display: inline-block;
    float: left;
    position: relative;
    width: 59.3%;
    height: 3.93rem;
    margin:0.28rem 4.26666% 0.28rem 5.6% ;
  }
  .icon img{
    width: 100%;
    height: 100%;
  }
  .icon .tag{
    display: table;
    position: absolute;
    top: -0.133rem;
    left: -0.226rem;
    width: 1.21rem;
    height: 1.21rem;
    background-image: url("../assets/tag.png");
    background-size: cover;
    color: #fff;
  }
  .icon .tag p{
    display: table-cell;
    vertical-align: middle;
    font-size: 0.293rem;
  }
  .icon .sale-time{
    width: 5.25rem;
    height: 0.533rem;
    position: absolute;
    right: 0.12rem;
    bottom: 0.346rem;
    background-image: url("../assets/sale-time.png");
    background-size: 100% 100%;
    color: #fff;
  }
  .icon .sale-time p{
    font-size: 0.32rem;
    line-height: 0.533rem;
  }
  .content{
    position: relative;
    width: 29%;
    height: 3.93rem;
    margin-top: .28rem;
    display: inline-block;
    float: left;
    font-size: 0;
  }
  .content .name{
    font-size: 0.44rem;
    line-height: 0.53rem;
    color: #000;
    margin-bottom: 0.2rem;
  }
  .content .desc{
    font-size: 0.226rem;
    color: rgba(0,0,0,0.6);
    margin-bottom: 0.2rem;
  }
  .old-price{
    text-decoration: line-through;
    font-size: 0.24rem;
    color: rgba(0,0,0,0.6);
    margin-bottom: 0.16rem;
  }
  .price{
    font-size: 0.386rem;
    font-weight: bold;
    color: #32ab42;
  }
  .price .attach{
    font-size: 0.32rem;
    color: #32ab42;
  }
  .toCart{
    display: block;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 2px;
    transform: translate(-50%,0);
    width: 73.2%;
    height: 0.64rem;
    background: url("../assets/sale.png") no-repeat ;
    background-size: 100% 100%;
  }
  .loadmore{
    height: .426667rem;
    line-height: .426667rem;
    font-size: .32rem;
  }
  .toTop{
    display: none;
    background-color: #000;
    width: 1.066667rem;
    height: 1.066667rem;
    position: fixed;
    bottom: 2rem;
    right: .266667rem;
  }
</style>
