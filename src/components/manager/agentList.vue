<template>
  <div class="content">
    <div class="select">
      <label class="control-label">状态</label>
      <select class="form-control" v-model="status" @change="change">
        <option value="0" selected="true">未审核的</option>
        <option value="1">已通过审核的</option>
        <option value="2">未通过审核的</option>
      </select>
    </div>
    <no-review :items="items" :has="has" v-on:get="getData" v-on:insert="insert" v-if="status == 0"></no-review>
    <has-review :items="items" :has="has" v-on:get="getData" v-on:update="update" v-else></has-review>
     <footerview :page="page" :jpage="jpage" :totel="totel" :limit="limit" v-on:pagnation="pagnation"></footerview>
  </div>
</template>

<script>
import request from './../../common/mrequest'
import footerview from './tableFoot'
import noReview from './noreview'
import hasReview from './hasreview'
export default {
  name: 'content',
  components: {
    footerview,
    noReview,
    hasReview
  },
  data () {
    return {
      items: [],
      limit: 10,
      page: 0,
      jpage: '',
      totel: 1,
      has: true,
      status: 0
    }
  },
  methods: {
    pagnation (limit, page) {
      this.limit = limit
      this.page = page
      this.getData()
    },
    update (agentId) {
      this.$emit('update', agentId)
    },
    insert (agentId) {
      this.$emit('insert', agentId)
      console.log(agentId)
    },
    change () {
      this.page = 0
      this.getData()
    },
    getData () {
      var data = {
        rootName: 'agentlist',
        limit: this.limit,
        page: this.page + 1,
        status: this.status
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
          console.log('success')
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
.select .form-control {
  border: 1px solid #666;
  padding: 2px;
  background: #fff;
  border-radius: 2px;
  vertical-align: middle;
  font-size: 18px;
}
.select {
  float: left;
  padding: 10px 0;
}
.btn-update {
  cursor: pointer;
  width: 50px;
  outline: none;
  /*padding: 10px 15px;*/
  border: 1px solid #666;
  background-color: green;
  border-radius: 2px;
  font-size: 14px;
  color: #fff;
  text-align: center;
}
</style>
