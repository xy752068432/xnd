<template lang="html">
  
      <div class="contents">
     
        <div id="logo2">
          <div id="logo21">
              <img src="../assets/personcenter/tx.png">
          </div>
          <div id="meslogo" @click="mes">
            <img id="meslogo1" src="../assets/personcenter/meslogo.png">
            <div id="mes">
                <img src="../assets/personcenter/mes.png">
            </div>
          </div>
          <div id="mestxt">
            <p>BUG MAKER</p>
          </div>
        </div>
        <div class="licut">
          
        </div>
        <div id="status">
            <div id="status1">
               <div id="willpay1" @click="towillpay" class="willpay will wills">
                 <img class="willimg" id="willpay" src="../assets/personcenter/willpay.png">
                 <p>待付款</p>
                 <div class="willmes"><img src="../assets/personcenter/willmes.png"></div>
                 <div class="willmestxt"><p>88</p></div>
               </div>
               <div class="willout will wills" @click="towillgive">
                 <img class="willimg" id="willout" src="../assets/personcenter/willout.png">
                 <p>待发货</p>
                 <div class="willmes"><img src="../assets/personcenter/willmes.png"></div>
                 <div class="willmestxt"><p>88</p></div>
               </div>
               <div class="wills" id="willget1" @click="towillget">
                 <img class="willimg" id="willget" src="../assets/personcenter/willget.png">
                 <p>待收货</p>
                 <div class="willmes"><img  src="../assets/personcenter/willmes.png"></div>
                 <div class="willmestxt"><p>88</p></div>
               </div>
            </div>
        </div>
        <div class="licut">
          
        </div>
        
        <div class="list" @click="toalldingdan">
         
              <img id="allform" src="../assets/personcenter/allform.png">
              <span id="allform1" >全部订单</span>
              <div class="arrow">
                 <img src="../assets/personcenter/arrow.png">
               </div>
        </div>
        <div class="licut">
          
        </div>
        
        <div class="list" @click="tomyaddress">
            <img id="address" src="../assets/personcenter/address.png">
               <span id="address1">收货地址</span>
               <div class="arrow">
                 <img src="../assets/personcenter/arrow.png">
               </div>
        </div>
        
        <div class="licut">
          
        </div>
        <div class="list" herf="tel:123456">
         
              <img id="link" src="../assets/personcenter/link.png">
               <span id="link1">联系客服</span>
               <div class="arrow">
                 <img  src="../assets/personcenter/arrow.png">
               </div>
        </div>
        <div class="licut">
          
        </div>       
        <bottombar></bottombar>
     </div> 

</template>

<script>
import bottombar from '../components/bottombar'
export default {
  name: 'center',
  methods: {
    tomyaddress () {
      this.$router.push({path: '/person/myaddress'})
    },
    mes () {
      this.$router.push({path: '/person/message'})
    },
    /* tologdetail () {
      this.$router.push({path: '/logdetail'})
    }, */
    towillpay: function () {
      this.$router.push({path: '/person/alldingdan/willpay'})
    },
    towillgive: function () {
      this.$router.push({path: '/person/alldingdan/willgive'})
    },
    towillget: function () {
      this.$router.push({path: '/person/alldingdan/willget'})
    },
    toalldingdan: function () {
      this.$router.push({path: '/person/alldingdan/all'})
    }
  },
  components: {
    bottombar
  }
}
</script>
<style>
 @import "../common/mixin.css";
 .content
 {
  width: 100%;
  height: 100%;
 }
#logo2
{
  padding-top: 1.746667rem;
  width: 100%;
  height: 2.826667rem;
  position: relative;
}
#logo2 #logo21 img
{
  width: 1.413333rem;
  height: 1.413333rem;
}
#meslogo #meslogo1
{
  width: 0.626667rem;
  height:0.586667rem;
  position: absolute;
  top: 1.6rem;
  right:0.626667rem;
}
#mes
{
  position: absolute;
  top: 0.9rem;
  right: 0.573333rem;
}
#mes img
{
  width: 0.306667rem;
  height:0.306667rem;
}
#mestxt
{
  font-size: 0.306667rem;
  padding-top: 0.346667rem;
}
.licut
{
  width: 100%;
  height: 0.04rem;
  background: url(../assets/licut.png);
}
#status
{
  height: 2.426667rem;
  width: 100%;
}
#status #status1 .wills
{
  float: left;
  font-size: 0.373333rem;
  position: relative;
}
#willpay1
{
  margin-left:19%;
}
.will
{
  margin-right:15.5%; 
}
.willimg
{
  margin-bottom: 0.106667rem;
}
#willpay
{
  margin-top:0.693333rem; 
  width: 0.613333rem;
  height: 0.506667rem;
}
#willout
{
  margin-top: 0.666667rem;
  width: 0.72rem;
  height:0.56rem;
}
#willget
{
  margin-top: 0.653333rem;
  width: 0.6rem;
  height: 0.586667rem;
}
.willmes img
{
  width: 0.466667rem;
  height: 0.466667rem;
  position: absolute;
  top: 0.4rem;
  right: -0.025rem;
}
.willmestxt 
{
  position: absolute;
  top: 0.4777rem;
  left: 0.7222rem;
  color: white;
  font-size: 0.3rem;
}
.list
{
  font-size: 0.4rem;
  text-align: left;
  position: relative;
  width: 100%;
  height: 1.586667rem;
}
#allform
{
   width: 0.546667rem;
   height: 0.533333rem;
   margin: 0.533333rem 0 0 0.6rem;
 }
#address
{
  width: 0.626667rem;
  height: 0.546667rem;
  margin: 0.52rem 0 0 0.56rem;
}
#link
{
  width: 0.573333rem;
  height: 0.506667rem;
  margin: 0.533333rem 0 0 0.6rem;
}
.list span
{
  position: absolute;
  top: 0.6rem;
  left: 1.52rem;
}
.arrow
{
  position: absolute;
  right: 1rem;
  top: 0.6rem;
}
.arrow img
{
  width: 0.2rem;
  height: 0.333333rem;
}
</style>
