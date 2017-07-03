<template>
<div>
	<div id="back1" @click="back">
       <img class="arrowwh" src="../../../assets/back.png">
       <span>物流详情</span>
    </div>
    <div class="licut">
  	   
    </div>
    <bottombar></bottombar> 
</div>
	
</template>
<script>
import bottombar from '../../../components/bottombar'
export default {
  name: 'logisticsdetail',
  components: {
    bottombar
  },
  methods: {
    back () {
      this.$router.push({path: '/person'})
    }
  }
}
</script>
<style>
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
</style>
