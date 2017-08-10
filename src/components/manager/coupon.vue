<template>
	<div>
    <managerheader></managerheader>
    <managerleft></managerleft>
    <div style="margin-left:192px;">
      <div class="radio-horizontal">
        <div class="radio">
          <button type="button"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
          <label class="control-label">查看优惠券</label>
        </div>
      </div>
      <div class="split"></div>
      <search></search>
    </div>
	</div>
</template>
<script>
import managerheader from '../../components/manager/managerheader'
import managerleft from '../../components/manager/managerleft'
import search from './searchCoupon'
export default {
  name: 'data',
  components: {
    managerheader,
    managerleft,
    search
  },
  methods: {
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
