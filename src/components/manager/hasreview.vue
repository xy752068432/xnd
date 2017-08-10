<template>
  <table class="table" id="agentlist">
    <tbody>
      <tr>
        <th width="90">用户ID</th>
        <th width="90">用户名</th>
        <th width="171">昵称</th>
        <th width="90">电话</th>
        <th width="90">身份证号</th>
        <th width="90">地址</th>
        <th width="164">代理ID</th>
        <th width="91">级别</th>
        <th width="81">状态</th>
        <th></th>
      </tr>
      <tr v-if="!has">
        <td colspan="10">暂无数据</td>
      </tr>
      <tr v-for="(item, key) in items">
        <td>{{ item.user_id }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.nickname }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.id_num }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.agent_id }}</td>
        <td>{{ item.level }}</td>
        <td>{{ item.status }}</td>
        <td>
          <button type="button" class="btn-update" @click="update" :index="key + 1">修改信息</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'hasreview',
  props: ['items', 'has'],
  created () {
    this.$emit('get')
  },
  methods: {
    update (event) {
      var el = event.target
      var index = el.getAttribute('index')
      var tableObj = document.getElementById('agentlist')
      var row = tableObj.rows[index]
      var agentId = row.cells[2].innerText
      this.$emit('update', agentId)
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
.btn-update {
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
