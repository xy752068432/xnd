<template>
	<div>
    <managerheader></managerheader>
    <managerleft></managerleft>
    <div>
      <div class="radio-horizontal">
        <div class="radio">
          <button type="button" v-if="show1" @focus="toggle1"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
          <button type="button" v-if="!show1" @focus="toggle1"><img src="./../../assets/m_data/c_link/c_ing.png"></button>
          <label class="control-label">查看优惠券</label>
        </div>
        <div class="radio">
          <button type="button" v-if="show2" @focus="toggle2"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
          <button type="button" v-if="!show2" @focus="toggle2"><img src="./../../assets/m_data/c_link/c_ing.png"></button>
          <label class="control-label">新增优惠券</label>
        </div>
      </div>
      <div class="split"></div>
      <search v-if="show1"></search>
      <add v-if="show2"></add>
    </div>
	</div>
</template>
<script>
import managerheader from '../../components/manager/managerheader'
import managerleft from '../../components/manager/managerleft'
import search from './searchCoupon'
import add from './addCoupon'
export default {
  name: 'data',
  data () {
    return {
      show1: true,
      show2: false
    }
  },
  components: {
    managerheader,
    managerleft,
    search,
    add
  },
  methods: {
    toggle1 () {
      this.show1 = true
      this.show2 = false
    },
    toggle2 () {
      this.show1 = false
      this.show2 = true
    }
  }
}
</script>
<style>
  .radio-horizontal {
    position: relative;
    height: 80px;
    line-height: 80px;
  }
  .radio-horizontal:after {
    display: table;
    content: '';
    clear: both;
  }
  .control-label {
    display: inline-block;
    width: 100px;
    font-size: 18px;
    color: #000;
    text-align: right;
  }
  .radio-horizontal .radio:first-child {
    margin-left: 73px;
  }
  .radio-horizontal .radio {
    float: left;
    margin-right: 82px;
  }
  .split {
    height: 1px;
    background: url('./../../assets/m_data/c_link/licut.png') 100% 100%;
  }
  .radio-horizontal .radio button {
    display: inline-block;
    margin-right: 8px;
    width: 21px;
    height: 21px;
    background: #fff;
    outline: none;
    border: none;
    padding: 0;
    vertical-align: middle;
  }
</style>
