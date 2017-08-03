<template>
	<div id="cochild">
	   <div id="c_timebar" v-show="toggleto">
	      <span id="timetxt">时间</span>
	      <input id="stime" type="datetime-local" v-model="date1">
          <span>到</span>
          <input id="endtime" type="datetime-local" v-model="date2">
          <input id="check1" type="button" name="" @click="getdata" value="查询" />
	   </div>
       <div id="c_orderbar" v-show="!toggleto">
       	  <span>商户订单号</span>
       	  <input type="text" id="c_order1" name="" v-model="data3">
       	  <input id="check2" type="button" name="" @click="getdata1" value="查询" />
       </div>
       
       <table v-show="gotdate">
       	  <tr>
       	  	<th id="th1">交易时间</th>
       	  	<th id="th2">支付场景</th>
       	  	<th id="th3">商户订单号</th>
       	  	<th id="th4">购买商品名称</th>
       	  	<th id="th5">份数</th>
       	  	<th id="th6">抵用金额(元)</th>
            <th id="th7">付款金额(元)</th>
       	  </tr>
       	  <tr v-for="item in data1">
       	  	<td style="width: 172px;">{{item.created_at}}</td>
       	  	<td style="width: 100px;">{{item.pay_by}}</td>
       	  	<td style="width: 130px;">{{item.order_num}}</td>
       	  	<td style="width: 232px;">{{item.goods_name}}</td>
       	  	<td style="width: 69px;">{{item.goods_num}}</td>
       	  	<td style="width: 124px;">{{item.coupon_price}}</td>
       	  	<td style="width: 114px;">{{item.all_price}}</td>
       	  </tr>
       </table>
       <div id="topage">
         <div id="topage1" v-show="hidpage">
         	 <img @click="decrepage" id="img1" src="../../assets/back.png"> 
         	 <span id="dpage">{{this.count}}/{{this.maxpage}}</span>
         	 <img id="tonext" @click="addpage" src="../../assets/personcenter/arrow.png">
       	     <span class="to" @click="endpage">尾页</span>
       	     <input type="text" @keyup="pagenum" name="" v-model="apage"/> 
       	     <span class="to" @click="toapage">跳转</span>
         </div>
       	
       </div>
	</div>
</template>
<script>
import mrequest from '../../common/mrequest'
import utils from '../../common/utils'
export default {
  name: 'cochild',
  data: function () {
    return {
      date1: '',
      date2: '',
      data3: '',
      data: [],
      gotdate: false,
      toggleto: true,
      hidpage: false,
      count: 1,
      data1: [],
      total: '',
      apage: '',
      page: 1,
      state1: true,
      maxpage: ''
    }
  },
  watch: {
    state: function (oldval, newval) {
      if (this.state === 1) {
        this.toggleto = true
        this.gotdate = false
      } else {
        this.toggleto = false
        this.gotdate = false
      }
    },
    agent: function (oldval, newval) {
      this.gotdate = false
    }
  },
  props: ['agent', 'state'],
  created: function () {
    localStorage.setItem('agent', '1')
    localStorage.setItem('token', '$2y$10$7o6zFDzEyxnJpHQ5U2MvFuFPI1Zz5CqKHFdyEakFH3.et1WITA1CG')
  },
  methods: {
    getdata: function () {
      var refreshData
      if (this.date1 !== '' && this.date2 !== '' && this.agent !== '') {
        if (this.state1 === true) {
          this.state1 = false
          var reg = new RegExp('T', 'g')
          var date1 = this.date1.replace(reg, ' ')
          var date2 = this.date2.replace(reg, ' ')
          mrequest.get(this.$router, {
            rootName: 'c_time',
            agent_id: this.agent,
            start_time: date1,
            end_time: date2,
            page: 1
          }, function (data) {
            this.state1 = true
            if (data.pages === 0) {
              utils.toToast('目前还没有数据')
            } else {
              this.count = this.page
              refreshData = data.items
              this.data = this.data.concat(refreshData)
              this.gotdate = true
              this.data1 = data.items
              if (data.pages > 1) {
                this.hidpage = true
                this.page++
                this.maxpage = data.pages
              }
            }
          }.bind(this), function (err) {
            console.log(err)
            utils.toToast('请求失败')
            this.state1 = true
          }.bind(this))
        }
      }
    },
    addpage: function () {
      var refreshData
      if (this.date1 !== '' && this.date2 !== '' && this.agent !== '') {
        if (this.state1 === true) {
          this.state1 = false
          var reg = new RegExp('T', 'g')
          var date1 = this.date1.replace(reg, ' ')
          var date2 = this.date2.replace(reg, ' ')
          mrequest.get(this.$router, {
            rootName: 'c_time',
            agent_id: this.agent,
            start_time: date1,
            end_time: date2,
            page: this.page
          }, function (data) {
            this.state1 = true
            refreshData = data.items
            this.data = this.data.concat(refreshData)
            if (this.page < data.pages) {
              this.count = this.page
              this.data1 = data.items
              this.page++
            } else {
              this.state1 = true
              this.data1 = data.items
              this.count = data.pages
            }
          }.bind(this), function (err) {
            console.log(err)
            utils.toToast('请求失败')
            this.state1 = true
          }.bind(this))
        }
      }
    },
    decrepage: function () {
      this.page--
      if (this.date1 !== '' && this.date2 !== '' && this.agent !== '') {
        if (this.state1 === true) {
          this.state1 = false
          var reg = new RegExp('T', 'g')
          var date1 = this.date1.replace(reg, ' ')
          var date2 = this.date2.replace(reg, ' ')
          mrequest.get(this.$router, {
            rootName: 'c_time',
            agent_id: this.agent,
            start_time: date1,
            end_time: date2,
            page: this.page
          }, function (data) {
            this.state1 = true
            this.data1 = data.items
          }.bind(this), function (err) {
            console.log(err)
            utils.toToast('请求失败')
            this.state1 = true
          }.bind(this))
        }
      }
    },
    toapage: function () {
      if ((/\d$/.test(this.apage)) && this.apage < this.maxpage + 1) {
        this.data1.length = 0
        if (this.date1 !== '' && this.date2 !== '' && this.agent !== '') {
          if (this.state1 === true) {
            this.state1 = false
            var reg = new RegExp('T', 'g')
            var date1 = this.date1.replace(reg, ' ')
            var date2 = this.date2.replace(reg, ' ')
            mrequest.get(this.$router, {
              rootName: 'c_time',
              agent_id: this.agent,
              start_time: date1,
              end_time: date2,
              page: this.apage
            }, function (data) {
              this.state1 = true
              this.data1 = data.items
            }.bind(this), function (err) {
              console.log(err)
              utils.toToast('请求失败')
              this.state1 = true
            }.bind(this))
          }
        }
      } else {
        utils.toToast('请输入正确的页数')
      }
    },
    pagenum: function () {
      if (!(/\d$/.test(this.apage))) {
        utils.toToast('请输入数字')
      }
      if (this.apage > this.maxpage) {
        utils.toToast('请输入正确的页数')
      }
    },
    endpage: function () {
      if (this.date1 !== '' && this.date2 !== '' && this.agent !== '') {
        if (this.state1 === true) {
          this.state1 = false
          var reg = new RegExp('T', 'g')
          var date1 = this.date1.replace(reg, ' ')
          var date2 = this.date2.replace(reg, ' ')
          mrequest.get(this.$router, {
            rootName: 'c_time',
            agent_id: this.agent,
            start_time: date1,
            end_time: date2,
            page: this.maxpage
          }, function (data) {
            this.state1 = true
            this.data1 = data.items
          }.bind(this), function (err) {
            console.log(err)
            utils.toToast('请求失败')
            this.state1 = true
          }.bind(this))
        }
      }
    },
    getdata1: function () {
      if (this.date3 !== '' && this.agent !== '') {
        if (this.state1 === true) {
          this.state1 = false
          mrequest.get(this.$router, {
            rootName: 'c_order',
            agent_id: this.agent,
            order_id: this.data3
          }, function (data) {
            this.state1 = true
            this.gotdate = true
            this.data1 = []
            this.data1.push(data)
          }.bind(this), function (err) {
            console.log(err)
            console.log('fsdfdsdfds')
            utils.toToast('请求失败')
            this.state1 = true
          }.bind(this))
        }
      }
    }
  }
}
</script>
<style>
#cochild
{
   color: black;
   font-size: 18px;
   float: left;
   padding-top: 27px;
   padding-left: 73px;
   min-width: 1000px;
   height: auto;
   position: relative;
}
input 
{
	border: black solid 1px;
}
#stime
{
	margin-left: 20px;
	margin-right: 7px;
}
#endtime
{
	margin-left: 7px;
}
#cochild #check1,#cochild #check2
{
	margin-left: 17px;
	width: 80px;
	background-color: white;
	height: 30px;
}
#cochild table
{
	width: auto;
	margin-top: 50px;
	margin-left: 50px; 
	font-size: 14px;
}
#cochild table,#cochild table th,#cochild table td
{
	border:black solid 1px;
}
#cochild table th
{
    height: 44px;
    background-color: #bcbcbc;
    vertical-align: middle;
    text-align: center;
}
#cochild table td
{
	height: 32px;
	vertical-align: middle;
    text-align: center;
    overflow-x: auto;
    overflow-y: hidden;
}
#cochild table #th1
{
	width: 172px;
}
#cochild table #th2
{
	width: 100px;
}
#cochild table #th3
{
	width: 130px;
}
#cochild table #th4
{
	width: 232px;
}
#cochild table #th5
{
	width: 69px;
}
#cochild table #th6
{
	width: 124px;
}
#cochild table #th7
{
	width: 114px;
}
#topage
{
	position: absolute;
	top: 600px;
    right: 100px;
    height: 17px;
    width: 200px;
    text-align: center;
}
#topage1
{
	position: relative;
}
#topage img
{
	position: absolute;
	top: 4px;
    width: 10px;
    height: 13px;
}
#topage #img1
{
	left: 7px;
}
#tonext
{
	margin-left: 5px;
	left: 40px;
}
#dpage
{
	margin-right: 15px;
	width: 20px;
}
#topage span
{
	display: inline-block;
	font-size: 10px;
}
#topage input
{
	height: 16px;
	width: 16px;
	font-size: 10px;
	text-align: center;
	border-radius: 3px;
}
.to
{
	margin-top: -8px;
	height: 16px;
	width: 40px;
	text-align: center;
	border-radius: 3px;
	padding-top: 3px;
	margin-right: 5px;
	border: black solid 1px;
}
#c_order1
{
	width: 300px;
	height: 28px;
}
#c_orderbar span
{
	display: inline-block;
	width: 120px;
	text-align: center;
	font-size: 18px;
	padding:5px 0 5px 0;
	border: black solid 1px;
	margin-right: 10px;
}
#c_timebar #timetxt
{
	display: inline-block;
	width: 50px;
	text-align: center;
	font-size: 18px;
	padding:5px 0 5px 0;
	border: black solid 1px;
}
#c_orderbar,#c_timebar
{
	position: absolute;
	top: 27px;
	left: 73px;
}
</style>
