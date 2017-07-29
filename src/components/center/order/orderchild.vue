<template>
<div>
 
   <div class="licut">
  	   
   </div>

   <div class="content">
    <img id="selected1" v-show="this.actives1" src="../../../../static/order/selected.png">
    <img id="selected2" v-show="this.actives2" src="../../../../static/order/selected.png">
    <img id="selected3" v-show="this.actives3" src="../../../../static/order/selected.png">
    <img id="selected4" v-show="this.actives0" src="../../../../static/order/selected.png">
     <div v-if="this.hidshow" class="mes">
     	{{this.mes}}
     </div>
     <div v-else="!this.hidshow" class="manymes">
      <scroller
      :on-refresh="refresh"
      :on-infinite="infinite"  ref="my_scroller" style="height:15rem;margin-top:0">
     	<ul>
     		<li v-for="item in items">
     			<div class="detail" @click="tologistic(item.order_info.order_id)">
     				<div class="didangid"><span>订单号</span><span>：</span><span>{{item.order_info.order_num}}</span></div>
     				<div><span>下单时间</span><span>：</span><span>{{item.order_info.created_at}}</span></div>
     			</div>
     			
                <div class="gooddetail">
                	
                		    <div class="licut">
  	   
                        </div>
                			<div class="good" @click.stop="togooddetail(item.goods_info.goods_id)">
                				<div class="goodlist"><img :src="item.goods_info.goods_img"></div>
                				<div class="goodlist goodtxt"><div class="goodtxt1">{{item.goods_info.name}}</div><div class="goodtxt2">{{item.goods_info.goods_desc}}</div></div>
                				<div class="goodnum">X{{item.goods_info.num}}{{item.goods_info.unit}}</div>
                				<div class="goodmoney">{{item.goods_info.value}}</div>
                				<img class="togooddetail" src="../../../assets/personcenter/arrow.png">
                			</div>
                	
                </div>
                <div class="fine" v-for="price in item.price_info"><div><span>{{price.text}}</span></div><div class="finemoney">{{price.value}}</div>
                 <div class="licut">
  	   
                 </div>
                </div>
                
                <div class="goodtotal">
                   <div class="totalnum"><span class="totaltxt">{{item.summary.goods_count}}</span></div>
                   <div class="totalmoney"><span class="totaltxt">{{item.summary.price_count}}</span><span class="totaltxt1">{{item.summary.send_price_count}}</span></div>
                </div>
                 <div class="licut">
  	   
                </div>
                <div class="buttons">
                  <img @click.stop="clicked(button.click,item.order_info.order_id)" class="buttonsimg" v-for="button in item.other_info.buttons" v-if="button.state" :src="button.img_url" > 
                </div>
                   
                    <div class="givetime" v-for="texts in item.other_info.texts" v-if="texts.state">
                	   <div class="timetxt"><span>{{texts.name}}</span></div>
                	   <div class="timenum"><span>{{texts.value}}</span></div>
                    </div>
                
                <div class="bigcut">
  	   
                </div>
     		</li>
     	</ul>
      </scroller>
     </div>
   </div>
   
   <bottombar></bottombar>
 </div>
</template>
<script>
import bottombar from '../../../components/bottombar'
import request from '../../../common/request'
import utils from '../../../common/utils'
import VueScroller from 'vue-scroller'
import Vue from 'vue'
import wx from 'weixin-js-sdk'
export default {
  name: 'orderchild',
  components: {
    bottombar,
    VueScroller
  },
  watch: {
    status1: function (newval, oldval) {
      this.currentPage1 = 1
      this.getdatas()
    },
    statuss: function (newval, oldval) {
      this.status1 = this.statuss
    }
  },
  props: ['statuss', 'currentPage'],
  data: function () {
    return {
      hidshow: true,
      status1: '',
      mes: '',
      items: [],
      actives0: null,
      actives1: null,
      actives2: null,
      actives3: null,
      currentPage1: '',
      limit: 4,
      minurl: '',
      minurls: [],
      item2: []
    }
  },
  created: function () {
    this.minurl = location.href
    this.minurls = this.minurl.split('#')
    // console.log(this.minurl[pos - 1])
    var pos = this.minurl.indexOf('#')
    if (this.minurl[pos - 1] !== '?') {
      location.href = this.minurls[0] + '?#' + this.minurls[1]
    }
    this.minurl = this.minurls[0]
    console.log(this.minurl)
    this.$router.name = this.$route.name
    this.currentPage1 = this.currentPage
    // this.getdatas()
    if (this.statuss !== '') {
      this.status1 = this.statuss
    } else {
      this.status1 = this.$route.query.status
    }
  },
  methods: {
    getdatas: function () {
      this.currentPage1 = 1
      request.get(this.$router, {
        rootName: 'order',
        status: this.status1,
        page: this.currentPage1,
        limit: this.limit}, function (data) {
          this.actives0 = data.actives[0].actived
          this.actives1 = data.actives[1].actived
          this.actives2 = data.actives[2].actived
          this.actives3 = data.actives[3].actived
          this.mes = data.msg
          if (data.num === 0) {
            this.hidshow = true
          } else {
            this.hidshow = false
            this.items = data.items
          }
          if (data.items.length < this.limit) {
            this.currentPage1 = 1
          } else {
            this.currentPage1++
          }
        }.bind(this))
    },
    refresh: function (done) {
      this.currentPage1 = 1
      request.get(this.$router, {rootName: 'order', status: this.status1, page: this.currentPage1, limit: this.limit}, function (data) {
        this.actives0 = data.actives[0].actived
        this.actives1 = data.actives[1].actived
        this.actives2 = data.actives[2].actived
        this.actives3 = data.actives[3].actived
        this.mes = data.msg
        if (data.num === 0) {
          this.hidshow = true
        } else {
          this.hidshow = false
          this.items = data.items
        }
        this.currentPage1 ++
        done()
        utils.toToast('刷新成功')
      }.bind(this))
    },
    infinite: function (done) {
      if (this.currentPage1 > 1) {
        var refreshData
        request.get(this.$router, {rootName: 'order', status: this.status1, page: this.currentPage1, limit: this.limit}, function (data) {
          refreshData = data.items
          if (refreshData.length < this.limit) {
            this.currentPage1 = 1
            this.items = this.items.concat(refreshData)
            done(true)
          } else {
            this.currentPage1++
            for (var i = refreshData.length - 1; i >= 0; i--) {
              this.items.push(refreshData[i])
            }
            done()
          }
        }.bind(this))
      } else {
        done(true)
      }
    },
    clicked: function (num, orderid) {
      for (var i = 0; i < this.items.length; i++) {
        if (typeof this.items[i].checked === 'undefined') {
          Vue.set(this.items[i], 'checked', true)
        }
      }
      switch (num) {
        case 1:
          this.cancel(orderid)
          break
        case 2:
          this.paynow(orderid)
          break
        case 3:
          this.got(orderid)
          break
        case 4:
          this.logistic(orderid)
          break
        case 5:
          this.link()
          break
        case 6:
          this.delorder(orderid)
          break
      }
    },
    cancel: function (orderid) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].order_info.order_id === orderid && this.items[i].checked === true) {
          this.items[i].checked = false
          request.put(this.$router, {
            rootName: 'cancelorder',
            order_id: orderid}, function (data) {
              for (var i = this.items.length - 1; i >= 0; i--) {
                if (this.items[i].order_info.order_id === orderid) {
                  this.items.splice(i, 1)
                }
              }
              utils.toToast('取消成功')
            }.bind(this), function (err) {
              console.log(err)
              utils.toToast('取消失败')
              this.items[i].checked = true
            }.bind(this))
        }
      }
    },
    paynow: function (orderid) {
      request.get(this.$router, {
        url: this.minurl,
        rootName: 'pay'
      }, function (data) {
        this.item = data
        console.log(data)
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: this.item.appid, // 必填，公众号的唯一标识
          timestamp: this.item.timestamp, // 必填，生成签名的时间戳
          nonceStr: this.item.nonceStr, // 必填，生成签名的随机串
          signature: this.item.signature, // 必填，签名，见附录1
          jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        })
        wx.ready(function () {
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
          request.get(this.$router, {
            order_ids: orderid + ',',
            pay_id: 4,
            rootName: 'paying'
          }, function (data) {
            console.log(data)
            this.item2 = data
            console.log('支付1成功')
            wx.chooseWXPay({
              timestamp: this.item2.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: this.item2.nonce_str, // 支付签名随机串，不长于 32 位
              package: 'prepay_id=' + this.item2.prepay_id, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
              signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: this.item2.paySign, // 支付签名
              success: function (res) {
                if (res.errMsg === 'chooseWXPay:ok') {
                  alert('支付成功')
                } else {
                  alert('支付失败')
                }
              }
            })
          }.bind(this))
         // utils.toToast('支付成功')
         // this.$router.push({path: '/person/order/order?status=2'})
        })
          // wx.error(function(res){
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            // console.log(err)
           //  this.$router.push({path: '/person/order/order?status=1'})
         // })
      }.bind(this))
    },
    got: function (orderid) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].order_info.order_id === orderid && this.items[i].checked === true) {
          this.items[i].checked = false
          request.put(this.$router, {
            rootName: 'got',
            order_id: orderid}, function (data) {
              for (var i = this.items.length - 1; i >= 0; i--) {
                if (this.items[i].order_info.order_id === orderid) {
                  this.items.splice(i, 1)
                }
              }
              utils.toToast('确认收货成功')
            }.bind(this), function (err) {
              console.log(err)
              utils.toToast('确认收货失败')
              this.items[i].checked = true
            }.bind(this))
        }
      }
    },
    logistic: function (orderid) {
      this.tologistic(orderid)
    },
    link: function () {
      window.location.href = 'tel:17508404755'
    },
    delorder: function (orderid) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].order_info.order_id === orderid && this.items[i].checked === true) {
          this.items[i].checked = false
          request.patch(this.$router, {
            rootName: 'delorder',
            order_id: orderid}, function (data) {
              console.log(data)
              // console.log(this.items)
              for (var i = this.items.length - 1; i >= 0; i--) {
                if (this.items[i].order_info.order_id === orderid) {
                  this.items.splice(i, 1)
                }
              }
              utils.toToast('删除成功')
            }.bind(this), function (err) {
              console.log(err)
              utils.toToast('删除失败')
              this.items[i].checked = true
            })
        }
      }
    },
    togooddetail: function (goodid) {
      this.$router.push({path: '/detail?goodsId=' + goodid})
    },
    tologistic: function (orderid) {
      this.$router.push({path: '/person/order/logistic?order_id=' + orderid})
    }
  }
}
</script>
<style>
*{
	padding: 0;
	margin: 0;
}
#toggle
{
  margin-top: 0.973333rem;
  height: 1.24rem;
  width:100%;
  position: relative;
}
#back
{
  width:1.2rem;
  height: 1.24rem;
  position: absolute;
  top: -0.1rem;
}
.arrowwh
{
  width: 0.2rem;
  height: 0.333333rem;
}
#dingdanlist
{
  padding-left: 1.366667rem;
    padding-top:0.426667rem; 
}
#dingdanlist li
{
  list-style: none;
  float: left;
  font-size: 0.4rem;
  color: black;
}
ul .right
{
  padding-right: 0.946667rem;
}
.content
{
	width:100%;
	height: 14rem;
	overflow-y: auto;
	position: relative;
}
#selected1
{
	width: 1.253333rem;
	height: 0.04rem;
	position: absolute;
	top: 0;
	left: 1.3rem;
	z-index: 999;
}
#selected2
{
	width: 1.253333rem;
	height: 0.04rem;
	position: absolute;
	top: 0;
	left: 3.5rem;
	z-index: 999;
}
#selected3
{
	width: 1.253333rem;
	height: 0.04rem;
	position: absolute;
	top: 0;
	left: 5.6rem;
	z-index: 999;
}
#selected4
{
	width: 1.6rem;
	height: 0.04rem;
	position: absolute;
	top: 0;
	left: 7.8rem;
	z-index: 999;
}
.mes
{
	padding-top:3.346667rem; 
	height:1.333333rem;
	width:5.333333rem;
	margin: 0 auto;
	font-size: 0.413333rem;
}
.manymes
{
    width:100%;
	height: 13.9rem;
	overflow-y: auto;
}
.detail
{
	width: 80%;
	height:1.173333rem;
	text-align: left;
	margin-top: 0.32rem;
	margin-left: 0.573333rem;
	font-size: 0.32rem;
	color: #ADADAD;
}
.didangid
{
	margin-bottom: 0.186667rem;
}
.licut
{
  width: 100%;
  height: 0.04rem;
  background: url(../../../assets/licut.png);
}
.good
{
	  margin-left: 0.573333rem;
    padding-top: 0.253333rem;
    height: 1.266667rem;
    position: relative;
}
.good .goodlist
{
	float: left;
}
.goodtxt
{
	text-align: left;
	margin-left: 0.2rem;
	margin-top: 0.04rem;
}
.goodtxt1,.goodtxt2
{
	width: 2.666667rem;
	white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goodtxt1
{
	height: 0.413333rem;
    font-size: 0.413333rem;
}
.goodtxt2
{
	font-size: 0.32rem;
	height: 0.32rem;
	color: #ADADAD;
	margin-top: 0.226667rem;
}
.goodlist img
{
	width: 1.026667rem;
	height: 1.026667rem;
}
.goodnum
{
	font-size: 0.36rem;
	position: absolute;
	bottom: 0.586667rem;
	right:3.893333rem;
}
.goodmoney
{
	font-size: 0.36rem;
	position: absolute;
	bottom: 0.586667rem;
	right:1.08rem;
}
.togooddetail
{
	position: absolute;
	bottom: 0.586667rem;
	right:0.573333rem;
	width:0.2rem;
	height: 0.333333rem;
}
.fine
{
	width: 93%;
	height:0.586667rem;
	margin-top: 0.16rem;
	padding-left: 0.573333rem;
	font-size: 0.32rem;
}
.fine div
{
	float: left;
}
.finemoney
{
	margin-left: 6.7666rem;
}
.goodtotal
{
	width: 100%;
	height: 0.813333rem;
	position: relative;
}
.totalnum
{
	position: absolute;
	height: 0.813333rem;
	left: 0.573333rem;
	top: -0.333333rem;
}
.totalmoney
{
	position: absolute;
	height: 0.813333rem;
	right: 0.573333rem;
	top: -0.333333rem;
}
.goodtotal .totaltxt
{
	font-size: 0.4rem;
}
.goodtotal .totaltxt1
{
	font-size: 0.333333rem;
}
.goodbutton
{
	height: 0.973333rem;
	width: 100%;
	position: relative;
}
.goodbutton img
{
	width: 2.173333rem;
	height: 0.626667rem;
	position: absolute;
	top:0.173333rem;
}
.buttonpay
{
	right: 3.226667rem;
}
.buttoncancel
{
	right: 0.573333rem;
}
.bigcut
{
  width: 100%;
  height: 0.24rem;
  background: url(../../../../static/willpay/bigcut.png);
}
.givetime
{
	width: 100%;
	height: 0.973333rem;
	font-size: 0.413333rem;
	position: relative;
}
.givetime div
{
	position: absolute;
	top:0.28rem;
}
.givetime .timetxt
{
	left: 0.573333rem;
}
.givetime .timenum
{
	right: 0.573333rem;
}
.buttons
{
  text-align: right;
}
.buttonsimg
{ 
  width: 2.173333rem;
  height: 0.626667rem;
  padding-right: 0.573333rem;
}
</style>
