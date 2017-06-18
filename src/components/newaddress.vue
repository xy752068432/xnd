<template>
    <div>
    	<div id="back2">
           <img class="arrowwh" src="../assets/personcenter/arrow.png">
           <span>我的地址</span>
        </div>
        <div class="licut">
  	   
        </div>
        <div class="addlist">
        	
        </div>
        <div class="licut">
  	   
        </div>
        <div class="addlist">
        	
        </div>
        <div class="licut">
  	   
        </div>
        <div class="addlist">
        	
        </div>
        <div class="licut">
  	   
        </div>
        <div id="txtarea" placeholder="请输入用户名">
        	<textarea placeholder="请填写详细地址，如街道、楼牌号等"></textarea>
        </div>
        <div class="licut">
  	   
        </div>
    </div>
	
</template>
<script>
export default {
  name: 'newaddress'
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
}
#txtarea
{
	width: 100%;
	height: 2.573333rem;
}
textarea
{
	width: 93%;
	height: 2.4rem;
	padding-top: 0.413333rem;
	padding-left: 0.533333rem;
	font-size: 0.4rem;
}
</style>
