<template lang="html">
<div>
    
	<div id="back1" @click="back">
       <img class="arrowwh" src="../../../assets/back.png">
       <span>我的地址</span>
    </div>
  
    <div class="licut">
  	   
    </div>
    <div id="contain">
    	<ul>
    	<li v-for="(item,index) in addressList">
    		<div class="addressdetail">
    			<div class="name f1"><span>{{item.msg.name}}</span></div> <div class="tel f1"><span>{{item.msg.phone}}</span></div>
    			<div class="address">{{item.msg.fullAddr}}</div>
          <img class="select" v-show="!item.msg.state" @click="setDefault(item.msg.id)" src="../../../assets/personaddress1/noselect.png"  />
    			<img class="select" v-show="item.msg.state" @click="setDefault(item.msg.id)" src="../../../assets/personaddress1/selected.png"  />
                <img  @click="toedit(item.msg.id)" class="edit"  src="../../../assets/personaddress1/edit.png" />
                <img class="delete" @click="deletes(item.msg.id)" src="../../../assets/personaddress1/delete.png" />
    		</div>
    		<div class="licut">
  	   
            </div>
    	</li>
       </ul>
    </div>
    
    
      
       <div id="add2" @click="tonewadd">
          <div id="add2content">
            <span> + 添加新地址</span>
          </div>
       </div>
       <bottombar></bottombar>
</div>

</template>

<script>
import bottombar from '../../../components/bottombar'
import request from '../../../common/request'
export default {
  name: 'myaddress',
  components: {
    bottombar
  },
  data: function () {
    return {
      addressList: [],
      data: []
    }
  },
  created () {
    this.$nextTick(() => {
      this.getdata()
    })
  },
  methods: {
    tonewadd () {
      this.$router.push({path: '/person/newaddress'})
    },
    back () {
      this.$router.push({path: '/person'})
    },
    toedit (addid) {
      localStorage.setItem('addr_id', addid)
      this.$router.push({path: '/person/address/edit'})
    },
    getdata () {
      request.get(this.$route, this.data, function (data) {
        this.addressList = data
      }.bind(this))
    },
    setDefault (addressID) {
      for (var i = 0; i < this.addressList.length; i++) {
        if (this.addressList[i].msg.id === addressID) {
          this.data.rootName = 'setaddress'
          this.data.addr_id = addressID
          this.addressList[i].msg.state = true
          request.put(this.$route, this.data, function (data) {
          })
        } else {
          this.addressList[i].msg.state = false
        }
      }
    },
    deletes (addressid) {
      for (var i = 0; i < this.addressList.length; i++) {
        if (this.addressList[i].msg.id === addressid) {
          this.data.addr_id = addressid
          this.addressList.splice(i, 1)
          this.data.rootName = 'deladdress'
          request.delete(this.$route, this.data, function (data) {
          })
        }
      }
    }
  }
}

</script>
<style>
@import "../../../common/mixin.css";
#contain
{
  height:12rem; 
  overflow-y: auto;
}
#back1
{
	margin-top: 0.96rem;
	width: 100%;
	height: 1.24rem;
	text-align: left;
}
.arrowwh
{
	width: 0.2rem;
	height: 0.333333rem;
}
#back1 img
{
	margin-left: 0.6rem;
	margin-right: 0.6rem;
}
#back1 span
{
	font-size: 0.4rem;
}
.licut
{
  width: 100%;
  height: 0.04rem;
  background: url(../../../assets/licut.png);
}
.addressdetail
{
	width: 100%;
	height: 3.053333rem;
	position: relative;
}
.addressdetail .f1
{
	float: left;
}
.name
{
	font-size: 0.48rem;
	margin: 0.48rem 0.533333rem 0.32rem 0.48rem;
}
.tel,.address
{
	font-size: 0.346667rem;
}
.tel
{
	margin-top: 0.533333rem;
}
.address
{
	position: absolute;
	top: 1.28rem;
	left: 0.6rem;
}
.select
{
	width: 0.586667rem;
	height: 0.586667rem;
	position: absolute;
	bottom:0.48rem;
	left: 0.5555rem;
}
.edit,.delete
{
	width: 1.253333rem;
	height: 0.56rem;
	position: absolute;
	bottom: 0.48rem;
}
.edit
{
    right: 2.186667rem;
}
.delete
{
	right: 0.573333rem;
}
#add2
{ position: fixed;
  left: 1.733333rem;
  bottom: 2.04rem;
  width: 6.773333rem;
  height: 1.12rem;
  font-size: 0.4rem;
  background-color: white;
  border:#ADADAD solid 0.013333rem;
  color: #ADADAD;
}
#add2content
{
  margin-top:0.333333rem; 
}
</style>
