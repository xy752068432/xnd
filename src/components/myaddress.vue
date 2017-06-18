<template lang="html">
<div>
	<div id="back1">
       <img class="arrowwh" src="../assets/personcenter/arrow.png">
       <span>我的地址</span>
    </div>
    <div class="licut">
  	   
    </div>
    <ul>
    	<li>
    		<div class="addressdetail" @click="clicked1">
    			<div class="name f1"><span>柏巴拉·格列朗木</span></div> <div class="tel f1"><span>13055144755</span></div>
    			<div class="address">湖南省长沙市岳麓区尖山小区902</div>
    			<img class="select" src="../assets/personaddress1/selected.png" @click="select" />
                <img class="edit" src="../assets/personaddress1/edit.png" />
                <img class="delete" src="../assets/personaddress1/delete.png" />
    		</div>
    		<div class="licut">
  	   
            </div>
    	</li>
        <li>
    		<div class="addressdetail">
    			<div class="name f1"><span>柏巴拉·格列朗木</span></div> <div class="tel f1"><span>13055144755</span></div>
    			<div class="address">湖南省长沙市岳麓区尖山小区902</div>
    			<img class="select" src="../assets/personaddress1/noselect.png" />
                <img class="edit" src="../assets/personaddress1/edit.png" />
                <img class="delete" src="../assets/personaddress1/delete.png" />
    		</div>
    		<div class="licut">
  	   
            </div>
    	</li>
    </ul>
</div>
 </template>

<script>
export default {
  name: 'myaddress',
  methods: {
    clicked1 () {
      this.$router.push({path: '/newaddress'})
    }
  }
}
</script>
<style>
@import "../common/mixin.css";
#back1
{
	margin-top: 0.96rem;
	width: 100%;
	height: 1.413333rem;
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
  background: url(../assets/licut.png);
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
</style>
