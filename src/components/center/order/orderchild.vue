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
     	<ul>
     		<li v-for="item in items">
     			<div class="detail" @click="tologistic">
     				<div class="didangid"><span>订单号</span><span>：</span><span>{{item.order_info.order_num}}</span></div>
     				<div><span>下单时间</span><span>：</span><span>{{item.order_info.created_at}}</span></div>
     			</div>
     			
                <div class="gooddetail">
                	
                		    <div class="licut">
  	   
                        </div>
                			<div class="good" @click="togooddetail(item.goods_info.goods_id)">
                				<div class="goodlist"><img src="goods.goods_img"></div>
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
                  <img @click="clicked(button.click,item.order_info.order_id)" class="buttonsimg" v-for="button in item.other_info.buttons" v-if="button.state" :src="button.img_url" > 
                </div>
                   
                    <div class="givetime" v-for="texts in item.other_info.texts" v-if="texts.state">
                	   <div class="timetxt"><span>{{texts.name}}</span></div>
                	   <div class="timenum"><span>{{texts.value}}</span></div>
                    </div>
                
                <div class="bigcut">
  	   
                </div>
     		</li>
     	</ul>
     </div>
   </div>
   <bottombar></bottombar>
 </div>
</template>
<script>
import bottombar from '../../../components/bottombar'
import request from '../../../common/request'
export default {
  name: 'orderchild',
  components: {
    bottombar
  },
  watch: {
    statuss: function (newval, oldval) {
      this.getdatas()
    }
  },
  props: ['statuss'],
  data: function () {
    return {
      hidshow: true,
      status: '',
      mes: '',
      items: [],
      actives0: null,
      actives1: null,
      actives2: null,
      actives3: null
    }
  },
  created: function () {
    this.getdatas()
  },
  methods: {
    getdatas: function () {
      if (this.statuss !== '') {
        this.status = this.statuss
      } else {
        this.status = this.$route.query.status
      }
      request.get(this.$route, {
        status: this.status}, function (data) {
          this.actives0 = data.actives[0].actived
          this.actives1 = data.actives[1].actived
          this.actives2 = data.actives[2].actived
          this.actives3 = data.actives[3].actived
          // console.log(data)
          this.mes = data.msg
          if (data.num === 0) {
            this.hidshow = true
          } else {
            this.hidshow = false
            this.items = data.items
          }
        }.bind(this))
    },
    clicked: function (num, orderid) {
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
          this.link(orderid)
          break
        case 6:
          this.delorder(orderid)
          break
      }
    },
    cancel: function (orderid) {
      var prevent = true
      if (prevent === true) {
        prevent = false
        request.put(this.$route, {
          rootName: 'cancelorder',
          order_id: orderid}, function (data) {
            for (var i = this.items.length - 1; i >= 0; i--) {
              if (this.items[i].order_info.order_id === orderid) {
                this.items.splice(i, 1)
              }
            }
          }.bind(this), function (err) {
            console.log(err)
            prevent = true
          })
      }
    },
    paynow: function () {
    },
    got: function (orderid) {
      var prevent = true
      if (prevent === true) {
        prevent = false
        request.put(this.$route, {
          rootName: 'got',
          order_id: orderid}, function (data) {
            for (var i = this.items.length - 1; i >= 0; i--) {
              if (this.items[i].order_info.order_id === orderid) {
                this.items.splice(i, 1)
              }
            }
          }.bind(this), function (err) {
            console.log(err)
            prevent = true
          })
      }
    },
    logistic: function () {
    },
    link: function () {
    },
    delorder: function (orderid) {
      var prevent = true
      if (prevent === true) {
        prevent = false
        request.patch(this.$route, {
          rootName: 'delorder',
          order_id: orderid}, function (data) {
            console.log(data)
            // console.log(this.items)
            for (var i = this.items.length - 1; i >= 0; i--) {
              if (this.items[i].order_info.order_id === orderid) {
                this.items.splice(i, 1)
              }
            }
          }.bind(this), function (err) {
            console.log(err)
            prevent = true
          })
      }
    },
    togooddetail: function (goodid) {
      this.$router.push({path: '/detail?goodsId=' + goodid})
    },
    tologistic: function () {
      this.$router.push({path: '/person/order/logistic'})
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
