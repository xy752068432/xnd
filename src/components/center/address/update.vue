<template>
    <div>
    <headerbar></headerbar>
    	  <div id="back2" @click="back">
           <img class="arrowwh" src="../../../assets/back.png">
           <span>我的地址</span>
        </div>
        <div class="licut">
  	   
        </div>
        <div class="addlist">
        	<label>收货人</label><input type="text" name="" v-model="name" />
        </div>
        <div class="licut">
  	   
        </div>
        <div class="addlist">
        	<label>联系电话</label><input type="text" @keyup="isphone" name="" v-model="phone"/>
        </div>
        <div class="licut">
  	   
        </div>
        <div class="addlist" @click="show = true">
        	<label>所在地区</label>
          <div id="mradd" v-if="!result">{{this.province}}{{this.city}}{{this.area}}</div>
          <div id="makeoveradd" v-else="result">
             <span>{{result.province.name}}{{result.city.name}}{{result.area.name}}</span>
          </div>
          <img class="arrowwh" id="toarrow" src="../../../assets/personcenter/arrow.png">
        </div>
        <div class="licut">
  	   
        </div>
        <div id="txtarea">
        	<textarea id="ta" @focus="fontcolor" placeholder="请填写详细地址，如街道、楼牌号等" v-model="detail"></textarea>
        </div>
        <div class="licut">
  	   
        </div>
       <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>
        <div id="save1" @click.stop="save" v-show="hidshow">
          <div id="savecontent">
            <span>保存</span>
          </div>
      </div>
      <bottombar v-show="hidshow"></bottombar>
    </div>
	
</template>
<script>
import vueArea from 'vue-area'
import request from '../../../common/request'
import utils from '../../../common/utils'
import bottombar from '../../../components/bottombar'
import headerbar from '../../../components/headerbar'

export default {
  name: 'update',
  components: {
    vueArea,
    bottombar,
    headerbar
  },
  data: function () {
    return {
      result: null,
      show: false,
      name: '',
      phone: '',
      add: '',
      detail: '',
      sex: '男',
      addr_id: '',
      area: '',
      city: '',
      province: '',
      areacode: '',
      citycode: '',
      provincecode: '',
      state: true,
      hidshow: true,
      screenHeight: '',
      screenHeight1: ''
    }
  },
  watch: {
    screenHeight: function (newval, oldval) {
      if (newval < this.screenHeight1) {
        this.hidshow = false
      } else {
        this.hidshow = true
      }
    }
  },
  created: function () {
    this.$router.name = this.$route.name
    this.addr_id = this.$route.query.addr_id
    request.get(this.$router, {
      addr_id: this.addr_id}, function (data) {
        // console.log(data)
        this.name = data.msg.name
        this.phone = data.msg.phone
        this.detail = data.msg.location
        this.area = data.msg.areaName
        this.city = data.msg.cityName
        this.province = data.msg.provinceName
        this.areacode = data.msg.area_id
        this.citycode = data.msg.city_id
        this.provincecode = data.msg.province_id
        console.log(document.getElementById('ta').value.length)
        if (document.getElementById('ta').value.length === 0) {
          document.getElementById('ta').style.color = 'black'
        }
      }.bind(this))
  },
  mounted: function () {
    this.screenHeight1 = document.documentElement.clientHeight
    const that = this
    window.onresize = () => {
      return (() => {
        that.screenHeight = document.documentElement.clientHeight
      })()
    }
  },
  methods: {
    areaResult: function (show, result) {
      this.show = show
      this.result = result
      console.log(this.result)
    },
    hidit: function () {
      this.hidit = !this.hidit
    },
    save: function () {
      if (this.result !== null) {
        this.citycode = this.result.city.code
        this.areacode = this.result.area.code
        this.provincecode = this.result.province.code
      }
      if (!(/^1\d{10}$/.test(this.phone))) {
        utils.toToast('请填写正确的手机号')
      } else {
        if (this.state === true) {
          this.state = false
          request.put(this.$router, {
            addr_id: this.addr_id,
            rootName: 'saveedit',
            name: this.name,
            phone: this.phone,
            province: this.provincecode,
            city: this.citycode,
            area: this.areacode,
            detail: this.detail}, function (data) {
              utils.toToast('保存成功')
              this.state = true
              if (this.$route.query.goods_car_id1) {
                this.$router.push({path: '/person/address?addr_id=' + this.$route.query.addr_id + '&goods_car_id=' + this.$route.query.goods_car_id1})
              } else {
                this.$router.push({path: '/person/address'})
              }
            }.bind(this), function (err) {
              console.log(err)
              this.state = true
              utils.toToast('保存失败')
            }.bind(this))
        }
      }
    },
    isphone: function () {
      if (!(/^1\d{10}$/.test(this.phone))) {
        utils.toToast('请输入正确的手机号')
      }
    },
    back: function () {
      if (this.$route.query.goods_car_id1) {
        this.$router.push({path: '/person/address?addr_id=' + this.$route.query.addr_id + '&goods_car_id=' + this.$route.query.goods_car_id1})
      } else {
        this.$router.push({path: '/person/address'})
      }
    },
    fontcolor: function () {
      document.getElementById('ta').style.color = 'black'
    }
  }
}
</script>
<style>
@import "../../../common/mixin.css";
#back2
{
	margin-top: 0.96rem;
	width: 100%;
	height: 1.413333rem;
	text-align: left;
}
#back2 img
{
	margin-left: 0.6rem;
	margin-right: 0.6rem;
}
.arrowwh
{
	width: 0.2rem;
	height: 0.333333rem;
}
#back2 span
{
	font-size: 0.4rem;
}
.licut
{
  width: 100%;
  height: 0.04rem;
  background: url(../../../assets/licut.png);
}
.addlist
{
	width: 100%;
	height: 1.24rem;
	text-align: left;
	position: relative;
	font-size: 0.4rem;
}
.addlist label
{
	position: absolute;
	top: 0.413333rem;
	left: 0.533333rem;
}
.addlist input
{
	width: 70%;
	height: 0.8rem;
	position: absolute;
	top: 0.2rem;
	left: 2.546667rem;
}
#makeoveradd
{
	position: absolute;
  text-align: right;
	top: 0.413333rem;
	right: 1.586667rem;
  width: 5.333333rem;
  overflow-x: hidden;
  overflow-y: hidden;
}
#mradd
{
  position: absolute;
  text-align: right;
  padding-top: 0.133333rem;
  top: 0.3rem;
  right: 1.586667rem;
   width: 5.333333rem;
  overflow-x: hidden;
  overflow-y: hidden;
}
#toarrow
{
   position: absolute;
   right: 0.573333rem;
   top: 0.413333rem;
}
#txtarea
{
  height: 2.573333rem;
  width: 100%;
}
input
{
  outline: none;
}
textarea
{
  margin-left: 0.013333rem;
	width: 89%;
	height: 1.746667rem;
	padding: 0.413333rem 0.533333rem 0.413333rem 0.533333rem;
	font-size: 0.4rem;
  border-style: none;
  outline: none;
  color: #ADADAD;
}
#save1
{ position: absolute;
  left: 1.733333rem;
  bottom: 2.04rem;
  width: 6.773333rem;
  height: 1.1rem;
  font-size: 0.4rem;
  background-color: white;
  border:green solid 0.013333rem;
  color: green;
  border-radius: 6px;
}
#savecontent
{
  margin-top:0.333333rem; 
}
</style>
