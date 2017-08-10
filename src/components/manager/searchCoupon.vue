<template>
  <div class="content">
    <table class="table">
      <tbody>
        <tr>
          <th width="90">优惠码</th>
          <th width="171">生成时间</th>
          <th width="164">失效时间</th>
          <th width="91">使用次数</th>
          <th width="81">状态</th>
          <th width="107">抵用金额<br>(元)</th>
          <th width="143">使用范围</th>
          <th width="94">使用上限<br>(次)</th>
        </tr>
        <tr v-if="!has">
          <td colspan="8">暂无数据</td>
        </tr>
        <tr v-for="item in items">
          <td>{{ item.code }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.expired }}</td>
          <td>{{ item.times }}</td>
          <td>{{ item.status_text }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.range}}</td>
          <td>{{ item.all_times }}</td>
        </tr>
      </tbody>
    </table>
    <footerview :page="page" :jpage="jpage" :totel="totel" :limit="limit" v-on:pagnation="pagnation"></footerview>
  </div>
</template>

<script>
import request from './../../common/mrequest'
import footerview from './tableFoot'
export default {
  name: 'searchCoupon',
  data () {
    return {
      items: [],
      limit: 2,
      page: 0,
      jpage: '',
      totel: 1,
      has: true
    }
  },
  components: {
    footerview
  },
  created () {
    this.getData()
  },
  methods: {
    pagnation (limit, page) {
      this.limit = limit
      this.page = page
      this.getData()
    },
    getData () {
      var data = {
        rootName: 'coupon',
        limit: this.limit,
        page: this.page + 1
      }
      request.get(this.route, data, function (data) {
        if (data.hasOwnProperty('code') && data.code !== 0) {
          alert(data.msg)
          return
        }
        if (data.num === 0) {
          this.items = []
          this.has = false
        } else {
          this.items = data.items
          this.totel = data.pages
          this.has = true
        }
      }.bind(this), function (error) {
        alert(error)
      })
    }
  }
}
</script>

<style>
.content {
  float:left;
  width: 1100px;
  margin-left: 50px;
}
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
footer.page {
  font-size: 14px;
  color: #000;
  margin-top: 80px;
  font-family: '微软雅黑';
  float: right;

}
footer.page:after {
  display: table;
  content: '';
  clear: both;
}
.left {
  float:  left;
  margin-right: 20px;
}
.right {
  float: left;
}
.previous,
.next {
  position: relative;
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 1px solid #666;
  padding: 2px;
  border-radius: 2px;
  vertical-align: middle;
}
.previous:after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6px;
  margin-left: -9px;
  width: 0;
  height: 0;
  content: '';
  border: 6px solid transparent;
  border-right-color: black;
}
.next:after {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6px;
  margin-left: -3px;
  width: 0;
  height: 0;
  content: '';
  border: 6px solid transparent;
  border-left-color: black;
}
.end,
.right .jump {
  display: inline-block;
  height: 25px;
  color: #000;
  padding: 2px 8px;
  border: 1px solid #666;
  border-radius: 2px;
  vertical-align: middle;
  line-height: 25px;
  background: #fff;
}
.right .form-control {
  width: 40px;
  height: 25px;
  border: 1px solid #666;
  padding: 2px;
  background: #fff;
  border-radius: 2px;
  vertical-align: middle;
}
</style>
