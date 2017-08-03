<template>
	<div>
    <managerheader></managerheader>
    <managerleft></managerleft>
    <div>
      <div class="radio-horizontal">
          <div class="radio">
            <button type="button" v-if="show1" @focus="toggle1"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
            <button type="button" v-if="!show1" @focus="toggle1"><img src="./../../assets/m_data/c_link/c_ing.png"></button>
            <label class="control-label">新增代理</label>
          </div>
          <div class="radio">
            <button type="button" v-if="show2" @focus="toggle2"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
            <button type="button" v-if="!show2" @focus="toggle2"><img src="./../../assets/m_data/c_link/c_ing.png"></button>
            <label class="control-label">信息修改</label>
          </div>
      </div>
      <div class="split"></div>
      <add-agent  v-if="show1"></add-agent>
      <update-agent v-if="show2"></update-agent>
    </div>
	</div>
</template>
<script>
import managerheader from '../../components/manager/managerheader'
import managerleft from '../../components/manager/managerleft'
import addAgent from './addAgent'
import updateAgent from './updateAgent'
export default {
  name: 'agent',
  data () {
    return {
      show1: true,
      show2: false
    }
  },
  components: {
    managerheader,
    managerleft,
    addAgent,
    updateAgent
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
    // autoWidth (event) {
    //   var el = event.target
    //   el.width = document.body.clickWidth -
    // }
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
    width: 72px;
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
    background: url('./../../assets/m_login/thin-border.png') 100% 100%;
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
