<template lang="html">
    <div id="home">
      <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
        style="padding-top: 0.966rem;padding-bottom: 24px;"> 
      <ul>
        <li class="goods-item" v-for="(item,index) in goods" @click="toItem(index)">
          <div class="icon">
            <div class="tag" v-show="goods.status_text"><p>促销<br>热卖</p></div>
            <div class="sale-time" v-show="item.start_time > currentTime"><p>{{item.start_time | formatTime}}出售</p></div>
            <img :src="item.goods_img" >
          </div>
          <div class="content">
            <h2 class="name">{{item.title}}</h2>
            <p class="desc">{{item.description}}</p>
            <p class="old-price"><span class="old-attach">&yen;</span>{{item.origin_price}}<span class="old-attach">/{{item.unit}}</span></p>
            <p class="price"><span class="attach">&yen;</span>{{item.price}}<span class="attach">/{{item.unit}}</span></p>
            <a class="toCart" :class="item.start_time < currentTime && item.end_time > currentTime ? 'onsale' : 'unsale'"></a>
          </div>
        </li>
      </ul>
      </scroller>      
      <bottombar></bottombar>
      <!--回到顶部-->
      <div class="toTop" @click="toTop"></div>
      <!--<router-view :goodsId="goodsId"></router-view>-->
    </div> 
</template>
<script>
    import utils from '../common/utils'
    import VueScroller from 'vue-scroller'
    import bottombar from '../components/bottombar'
    import Toast from 'vue-easy-toast'
    import request from '@/common/request'

    // console.log(utils)
    // console.log(VueScroller.Scroller)
    export default{
      name: 'home',
      components: {
        VueScroller,
        bottombar,
        Toast
      },
      // goods => 商品列表 currentPage => 当前分页
      data: function () {
        return {
          goods: [],
          goodsId: 0,
          currentTime: 0,
          currentPage: 1
        }
      },
      created: function () {
        localStorage.setItem('token', '$2y$10$VMPISREduk8BTERybxMHXe1/iJW2ReAOuwYD/nfg2sp9LISU/SE0y')
        localStorage.setItem('id', '2')
        // let url = 'goods'
        var self = this
        request.get(this.$route, {page: 1}, function (data) {
          self.goods = data
          console.log(self.goods.length)
        })
        let d = new Date()
        this.currentTime = Math.floor(d.getTime() / 1000)
        // console.log(this.currentTime)
      },
      methods: {
        toTop () {
          // console.log('totop')
          VueScroller.scrollTo(0, 0)
          // utils.toTop()
          // document.body.scrollTop = 0
        },
        toItem (index) {
          // console.log(this.goods[index].id)
          var goodsId = this.goods[index].id
          this.goodsId = goodsId
          console.log(goodsId)
          this.$router.push({path: '/detail', query: { goodsId: goodsId }})
        },
        // getItem (page) {
        //   var refreshData
        //   var self = this
        //   request.get(this.$route, {page: page}, function (data) {
        //     refreshData = data
        //     if (refreshData.length < 10) {
        //       console.log('无更多数据')
        //       self.loadmore = false
        //     } else {
        //       self.currentPage++
        //       self.goods = self.goods.concat(refreshData)
        //       self.loadmore = true
        //     }
        //   })
        //   if (self.loadmore) {
        //     return false
        //   } else {
        //     return true
        //   }
        // },
        refresh: function (done) {
          var self = this
          request.get(this.$route, {page: 1}, function (data) {
            self.goods = data
            done()
            utils.toToast('刷新成功')
          })
        },
        infinite: function (done) {
          // console.log(this.goods.length)
          var refreshData
          var self = this
          request.get(this.$route, {page: self.currentPage + 1}, function (data) {
            refreshData = data
            if (refreshData.length < 10) {
              console.log('无更多数据')
              self.goods = self.goods.concat(refreshData)
              done(true)
              // self.loadmore = false
            } else {
              self.currentPage++
              self.goods = self.goods.concat(refreshData)
              done()
            }
          })
          // if (this.getItem(this.currentPage + 1)) {
          //   setTimeout(() => {
          //     done(true)
          //   }, 1500)
          // } else {
          //   setTimeout(() => {
          //     done()
          //     utils.toToast('加载成功')
          //   }, 1500)
          // }
        }
      },
      filters: {
        formatTime: function (time) {
          console.log(utils.formatDate(time))
          return utils.formatDate(time)
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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    /*background-size: 100% 100%;*/
  }
  .toCart.onsale{
    background: url("../assets/sale.png") no-repeat ;
    background-size: 100% 100%;
  }
  .toCart.unsale{
    background: url("../assets/unsale.png") no-repeat ;
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
