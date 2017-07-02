<template lang="html">
    <div id="cart">
        <!--购物车-->
        <div class="cart-item">
        <scroller
          :on-refresh="refresh"
          :on-infinite="infinite"
          style="padding-top: 0.966rem;padding-bottom: 24px;">           
          <ul>
            <li class="cart-item-wrap" v-for="(item,index) in goods" v-show="!item.state">
              <div class="icon">
                <div class="choose-btn" @click="selectItem(item)" :class="item.checked ? 'choose' : 'unchoose'"></div>
                <div class="icon-logo" @click.stop="toDetail">
                  <div class="tag"><p>促销<br>热卖</p></div>
                  <img :src="item.goods_info.goods_img">
                </div>  
              </div>
              <div class="content" @click="toDetail(item)">
                <h2 class="name">{{item.goods_info.title}}</h2>
                <p class="desc">{{item.goods_info.description}}</p>
                <p class="price-line"><span class="price"><span class="attach">&yen;</span>{{item.goods_info.price}}<span class="attach">/{{item.goods_info.unit}}</span></span><span class="old-price">&yen;{{item.goods_info.origin_price}}/{{item.unit}}</span></p>
                <p class="deliver-time">预计{{item.goods_info.send_time}}发货</p>
              </div>
              <div class="amount">
                <span class="btn-minus" @click="changeAmount(item,0)"></span>
                <input class="amount-num" type="number" :value="item.goods_num"></input>
                <span class="btn-plus" @click="changeAmount(item,1)"></span>
              </div>      
            </li>
          </ul>
        </scroller>    
        </div>
        <div class="toPay">
          <div class="chooseAll" @click="chooseAll" :class="selectAll ? 'select' : 'unselect'"></div>
          <p class="chooseAll-text">全选</p>
          <div class="pay-sum-wrap">
          <p><span class="pay-sum">合计：</span>&yen;{{totalMoney}}<span class="deliver">(不含运费)</span></p>
          </div>
          <div class="toPayBtn" @click="toCheck"></div>
        </div>  
        <bottombar></bottombar>
    </div>    
</template>
<script>
import Vue from 'vue'
import utils from '../common/utils'
import VueScroller from 'vue-scroller'
import bottombar from '../components/bottombar'
import request from '../common/request'
export default {
  //  itemList => 购物车列表
  data () {
    return {
      selectAll: false,
      goods: [],
      currentPage: 1
    }
  },
  components: {
    bottombar,
    VueScroller
  },
  created: function () {
    localStorage.setItem('token', '$2y$10$9q4C8UbXLiy66HmPLj9rPuIE1evB/dRMz4aCTWwj1biwKN905AXsi')
    // var self = this
    // request.get(this.route)
    var self = this
    request.get(this.$route, {page: 1}, function (data) {
      console.log('cart')
      console.log(data)
      self.goods = data
      console.log(self.goods)
    })
  },
  computed: {
    //  计算总金额
    totalMoney: function () {
      var total = 0
      this.goods.forEach(function (item, index) {
        if (item.checked) {
          total += item.goods_num * item.goods_info.price
        }
      })
      return total.toFixed(2)
    }
  },
  methods: {
    refresh: function (done) {
      var self = this
      request.get(this.$route, {page: 1}, function (data) {
        self.goods = data
        done()
        utils.toToast('刷新成功')
      })
    },
    infinite: function (done) {
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
    },
    //  进入商品详情页
    toDetail: function (item) {
      console.log('toDetail')
      this.$router.push({path: '/detail', query: { goodsId: 1 }})
    },
    // 去结算
    toCheck: function () {
      this.$router.push({path: '/order'})
    },
    //  选中购物车商品
    selectItem: function (item) {
      if (typeof item.checked === 'undefined') {
        Vue.set(item, 'checked', true)
      } else {
        item.checked = !item.checked
      }
    },
    //  全选
    chooseAll: function () {
      this.selectAll = !this.selectAll
      this.goods.forEach((item, index) => {
        if (typeof item.checked === 'undefined') {
          Vue.set(item, 'checked', this.selectAll)
        } else {
          item.checked = this.selectAll
        }
      })
    },
    //  改变购物车数量
    changeAmount: function (item, type) {
      if (type) {
        item.goods_num++
        request.put(this.$route, {rootName: 'updateCart', goods_car_id: item.goods_car_id, goods_num: item.goods_num})
      } else {
        if (item.goods_num > 1) {
          item.goods_num--
          request.put(this.$route, {rootName: 'updateCart', goods_car_id: item.goods_car_id, goods_num: item.goods_num})
        } else {
          request.delete(this.$route, {rootName: 'updateCart', goods_car_id: item.goods_car_id}, (data) => {
            console.log(data)
            if (!data.status) {
              this.refresh()
            }
          })
        }
      }
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
  }
  .address .right-arrow{
    position: absolute;
    right: .573333rem;
    top:.746667rem;
    width: .2rem;
    height: .333333rem;
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
  .icon .choose-btn{
    display: inline-block;
    float: left;
    width: .586667rem;
    height: .586667rem;
    margin-top: .746667rem;
    margin-right: 9.11%;
    background-size: 100% 100%;
    
    background-repeat: no-repeat
  }
  .icon .choose{
    background-image: url("../assets/cart/choose.png");
  }
  .icon .unchoose{
    background-image: url("../assets/cart/unchoose.png");
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
  .toPay{
    background-color: #fff;
    position: fixed;
    bottom: 1.58666rem;
    width: 100%;
    height: 1.213333rem;
    letter-spacing: 0;
    font-size: 0;
    border-top: 1px solid #ecedef;
  }
  .chooseAll{
    float: left;
    margin-left: 5.73333%;
    margin-top: .306666rem;
    width: .586667rem;
    height: .586667rem;
    background-size: 100% 100%;
  }
  .chooseAll.select{
    background-image: url("../assets/cart/choose.png");
  }
  .chooseAll.unselect{
    background-image: url("../assets/cart/unchoose.png");
  }
  .chooseAll-text{
    float: left;
    margin-left: .053333rem;
    margin-top: .453333rem;
    font-size: .293333rem;
  }
  .pay-sum-wrap{
    float: left;
    width: 49.3333%;
  }
  .pay-sum-wrap p{
    float: left;
    font-size: .346667rem;
    margin-left: 4.53333%;
    margin-top: .453333rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pay-sum-wrap .pay-sum{
    font-weight: bold;
  }
  .pay-sum-wrap .deliver{
    font-size: .28rem;
  }
  .toPayBtn{
    float: right;
    margin-top: .253333rem;
    margin-right: 5.73333%;
    background-image: url("../assets/cart/topay.png");
    background-size: 100% 100%;
    width: 24.93333%;
    height:.706666rem;
  }
</style>
