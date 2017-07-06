<template>
    <div>
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
        	<label>联系电话</label><input type="text" name="" v-model="phone"/>
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
        	<textarea placeholder="请填写详细地址，如街道、楼牌号等" v-model="detail"></textarea>
        </div>
        <div class="licut">
  	   
        </div>
       <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>
        <div id="save" @click="save">
          <div id="savecontent">
            <span>保存</span>
          </div>
      </div>
      <bottombar></bottombar>
    </div>
	
</template>
<script>
import vueArea from 'vue-area'
import request from '../../../common/request'
// import utils from '../common/utils'
import bottombar from '../../../components/bottombar'

export default {
  name: 'edit',
  components: {
    vueArea,
    bottombar
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
      province: ''
    }
  },
  created: function () {
    this.addr_id = localStorage.getItem('addr_id')
    console.log(this.addr_id)
    request.get(this.$route, {
      addr_id: this.addr_id}, function (data) {
        console.log(data)
        this.name = data.msg.name
        this.phone = data.msg.phone
        this.detail = data.msg.location
        this.area = data.msg.areaName
        this.city = data.msg.cityName
        this.province = data.msg.provinceName
      }.bind(this))
  },
  methods: {
    back: function () {
      this.$router.push({path: '/person/myaddress'})
    },
    areaResult: function (show, result) {
      this.show = show
      this.result = result
      console.log(this.result)
    },
    hidit: function () {
      this.hidit = !this.hidit
    },
    save: function () {
      request.put(this.$route, {
        addr_id: this.addr_id,
        rootName: 'saveedit',
        name: this.name,
        phone: this.phone,
        province: this.result.province.code,
        city: this.result.city.code,
        area: this.result.area.code,
        detail: this.detail}, function (data) {
          console.log(data)
          this.$router.push({path: '/person/myaddress'})
        }.bind(this))
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
#txtarea
{
	width: 100%;
	height: 2.573333rem;
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
  top: 0.413333rem;
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
textarea
{
  margin-left: 0.013333rem;
	width: 88%;
	height: 1.746667rem;
	padding: 0.413333rem 0.533333rem 0.413333rem 0.533333rem;
	font-size: 0.4rem;
  color: #ADADAD;
}
#save
{ position: fixed;
  left: 1.733333rem;
  bottom: 2.04rem;
  width: 6.773333rem;
  height: 1.12rem;
  font-size: 0.4rem;
  background-color: white;
  border:green solid 0.013333rem;
  color: green;
}
#savecontent
{
  margin-top:0.333333rem; 
}
</style>
