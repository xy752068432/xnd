<template>
    <div id="btn_div">
          <div class="btn_toggle checkorder">
             <router-link to='/checkorder'></router-link>
          </div>
          <div class="btn_toggle data" >
             <router-link to='/data'></router-link>
          </div>
          <div class="btn_toggle agent">
             <router-link to='/agent'></router-link>
          </div>
          <div class="btn_toggle coupon">
             <router-link to='/coupon'></router-link>
          </div>
          <div id="bgi">
            
          </div>
        </div>  
</template>
<script>
export default {
  name: 'managerleft'
}
</script>
<style>
#btn_div
{
  text-align: left;
  width: 192px;
 float: left;  
}
.btn_toggle
{
  min-height: 84px;
  width: 192px;
  margin-top: 1px;
}
.btn_toggle a {
  display: block;
  min-height: 84px;
  width: 192px;
}
.btn_toggle.checkorder a{
    background-image: url("../../assets/m_data/c_link/ordering.png");
}
.btn_toggle.checkorder a.router-link-exact-active{
    background-image: url("../../assets/m_data/c_link/ordered.png");
}
.btn_toggle.data a{
    background-image: url("../../assets/m_data/c_link/dataing.png");
}
.btn_toggle.data a.router-link-exact-active{
    background-image: url("../../assets/m_data/c_link/dataed.png");
}
.btn_toggle.agent a{
    background-image: url("../../assets/m_data/c_link/agenting.png");
}
.btn_toggle.agent a.router-link-exact-active{
    background-image: url("../../assets/m_data/c_link/agented.png");
}
.btn_toggle.coupon a{
    background-image: url("../../assets/m_data/c_link/couponing.png");
}
.btn_toggle.coupon a.router-link-exact-active{
    background-image: url("../../assets/m_data/c_link/couponed.png");
}
#bgi
{
  margin-top: 1px;
  width: 192px;
  background-image: url(../../assets/m_data/c_link/left.jpg);
  min-height:475px; 
}
</style>
