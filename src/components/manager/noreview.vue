<template>
  <table class="table" id="agentlist">
    <tbody>
      <tr>
        <th width="90">用户ID</th>
        <th width="171">昵称</th>
        <th width="164">代理ID</th>
        <th width="91">级别</th>
        <th width="81">状态</th>
        <th width="81">是否已经完善信息</th>
        <th></th>
      </tr>
      <tr v-if="!has">
        <td colspan="8">暂无数据</td>
      </tr>
      <tr v-for="(item, key) in items">
        <td>{{ item.user_id }}</td>
        <td>{{ item.nickname }}</td>
        <td>{{ item.agent_id }}</td>
        <td>{{ item.level }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.is_detail }}</td>
        <td>
          <button type="button" class="btn-insert" @click="insert" :index="key + 1">完善信息</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'noreview',
  props: ['items', 'has'],
  created () {
    this.$emit('get')
  },
  methods: {
    insert (event) {
      var el = event.target
      var index = el.getAttribute('index')
      var tableObj = document.getElementById('agentlist')
      var row = tableObj.rows[index]
      var agentId = row.cells[2].innerText
      console.log(agentId)
      this.$emit('insert', agentId)
    }
  }
}
</script>

<style>
.table {
  width: 100%;
  border-collapse: collapse;
  box-sizing: border-box;
}
.table tbody tr:first-child {
  background-color: #bcbcbc;
}

.table tbody tr>th {
  padding: 10px;
  font-size: 18px;
  line-height: 1.4em;
  color: #000;
  border: 1px solid #666;
  vertical-align: middle;
}
.table tbody tr>td {
  padding: 5px;
  font-size: 18px;
  color: #000;
  border: 1px solid #666;
  vertical-align: middle;
}

.form-control {
  border: 1px solid #666;
  padding: 2px;
  background: #fff;
  border-radius: 2px;
  vertical-align: middle;
}
.btn-insert {
  cursor: pointer;
  width: 50px;
  outline: none;
  border: 1px solid #666;
  background-color: green;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  text-align: center;
}
</style>
