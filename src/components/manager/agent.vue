<template>
	<div>
    <managerheader></managerheader>
    <managerleft></managerleft>
    <div style="margin-left:192px;">
      <div class="radio-horizontal">
          <div class="radio">
            <button type="button" v-if="show1" @focus="toggle1"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
            <button type="button" v-if="!show1" @focus="toggle1"><img src="./../../assets/m_data/c_link/c_ing.png"></button>
            <label class="control-label">代理列表</label>
          </div>
          <div class="radio">
            <button type="button" v-if="show2"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
            <button type="button" v-if="!show2"><img src="./../../assets/m_data/c_link/c_ing.png"></button>
            <label class="control-label">新增代理</label>
          </div>
          <div class="radio">
            <button type="button" v-if="show3"><img src="./../../assets/m_data/c_link/c_ed.png"></button>
            <button type="button" v-if="!show3"><img src="./../../assets/m_data/c_link/c_ing.png"></button>
            <label class="control-label">信息修改</label>
          </div>
      </div>
      <div class="split"></div>
      <agent-list v-if="show1" v-on:update="update" v-on:insert="insert"></agent-list>
      <add-agent v-if="show2" :agentId="agentId"></add-agent>
      <update-agent v-if="show3" :agentId="agentId"></update-agent>
    </div>
	</div>
</template>
<script>
import managerheader from '../../components/manager/managerheader'
import managerleft from '../../components/manager/managerleft'
import addAgent from './addAgent'
import updateAgent from './updateAgent'
import agentList from './agentList'
export default {
  name: 'agent',
  data () {
    return {
      show1: true,
      show2: false,
      show3: false,
      agentId: ''
    }
  },
  components: {
    managerheader,
    managerleft,
    addAgent,
    updateAgent,
    agentList
  },
  methods: {
    toggle1 () {
      this.show1 = true
      this.show2 = false
      this.show3 = false
    },
    update (agentId) {
      this.show1 = false
      this.show2 = false
      this.show3 = true
      this.agentId = agentId
    },
    insert (agentId) {
      this.show1 = false
      this.show2 = true
      this.show3 = false
      this.agentId = agentId
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
    line-height: 1.4em;
    vertical-align: middle;
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
