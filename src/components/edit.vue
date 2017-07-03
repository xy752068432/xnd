<template>
    <div>
    	<div id="back2" @click="back2">
           <img class="arrowwh" src="../assets/back.png">
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
        	<label>所在地区</label><div id="makeoveradd" v-if="result"><span>{{result.province.name}}{{result.city.name}}{{result.area.name}}</span></div>

        	<img class="arrowwh" id="toarrow" src="../assets/personcenter/arrow.png">
        </div>
        <div class="licut">
  	   
        </div>
        <div id="txtarea">
        	<textarea placeholder="请填写详细地址，如街道、楼牌号等" v-model="detail"></textarea>
        </div>
        <div class="licut">
  	   
        </div>
       <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>
        <div id="save" @click="saveback">
          <div id="savecontent">
            <span>保存</span>
          </div>
      </div>
      <bottombar></bottombar>
    </div>
	
</template>
<script>
import vueArea from 'vue-area'
import request from '@/common/request'
import bottombar from '../components/bottombar'

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
      addr_id: ''
    }
  },
  mounted: function () {
    var that = this
    localStorage.setItem('id', 2)
    localStorage.setItem('token', '$2y$10$9q4C8UbXLiy66HmPLj9rPuIE1evB/dRMz4aCTWwj1biwKN905AXsi')
    this.addr_id = localStorage.getItem('addr_id')
    console.log(this.addr_id)
    request.get(this.$route, {
      uid: 2,
      addr_id: this.addr_id}, function (data) {
        console.log(data)
        that.name = data.msg.name
        that.phone = data.msg.phone
        that.add = data.msg.fullAddr
      })
  },
  methods: {
    back2 () {
      this.$router.push({path: '/myaddress'})
    },
    areaResult: function (show, result) {
      this.show = show
      this.result = result
    },
    saveback () {
      request.put(this.$route, {
        uid: 2,
        addr_id: this.addr_id,
        rootName: 'saveedit',
        sex: this.sex,
        name: this.name,
        phone: this.phone,
        province: this.result.province.code,
        city: this.result.city.code,
        area: this.result.area.code,
        detail: this.detail}, function (data) {
          console.log(data)
        })
      this.$router.push({path: '/myaddress'})
    }
  }
}
</script>
<style>
@import "../common/mixin.css";
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
  background: url(../assets/licut.png);
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
