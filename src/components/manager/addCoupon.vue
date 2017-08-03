<template>
  <div class="form form-horizontal">
    <div class="hint">{{ hintText }}</div>
    <div class="form-group">
      <label class="control-label">商品</label>
      <select  class="form-control" name="goods_id" v-model="goods_id">
        <option v-for="item in items" :value="item.id">{{ item.title + '(' + item.id + ')' }}</option>
      </select>
      <div style="width:30px;height:30px;display:table-cell;font-size:14px;vertical-align:bottom">
        <button type="button" @click="pre" style="width:100%;height:15px;line-height:15px;padding:0;">&and;</button>
        <button type="button" @click="next" style="width:100%;height:15px;line-height:15px;padding:0;">&or;</button>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label">价格</label>
      <input type="text"  class="form-control" name="price" v-model="price">
    </div>
    <div class="form-group">
      <label class="control-label">有效天数</label>
      <input type="text"  class="form-control" name="expired_day" v-model="expired_day">
    </div>
    <div class="form-group">
      <label class="control-label">开始时间</label>
      <input type="date" class="form-control" name="start_time" v-model="start_time">
    </div>
    <div class="form-group">
      <label class="control-label">使用次数</label>
      <input type="text" class="form-control" name="all_times" v-model="all_times">
    </div>
    <div class="form-group">
      <button type="button" class="btn" @click="submit1"><img src="./../../assets/m_login/submit.png"></button>
    </div>
  </div>
</template>

<script>
import request from './../../common/mrequest'
export default {
  name: 'addCoupon',
  data () {
    return {
      goods_id: '',
      price: '',
      expired_day: '',
      start_time: '',
      all_times: '',
      hintText: '',
      isSubmit: false,
      limit: 2,
      items: [],
      curpage: 1,
      isend: false
    }
  },
  created () {
    this.getData()
  },
  methods: {
    submit1 () {
      if (this.isSubmit) {
        return
      }
      var isIllege = this.validate()
      if (!isIllege) {
        return
      }
      this.isSubmit = true
      var mydata = {
        rootName: 'addcoupon',
        goods_id: this.goods_id,
        price: this.price,
        expired_day: this.expired_day,
        start_time: this.start_time,
        all_times: this.all_times
      }
      request.post(this.route, mydata, function (data) {
        if (data.hasOwnProperty('code') && data.code !== 0) {
          this.hintText = data.msg
        } else {
          alert('添加成功')
          this.goods_id = ''
          this.price = ''
          this.expired_day = ''
          this.start_time = ''
          this.all_times = ''
        }
        this.isSubmit = false
      }.bind(this), function (error) {
        this.isSubmit = false
        console.log(error)
      }.bind(this))
    },
    next () {
      if (!this.isend) {
        this.curpage++
        this.getData()
      } else {
        alert('这是最后一页,不可再往下翻')
      }
    },
    pre () {
      if (this.curpage - 1 > 0) {
        this.curpage = this.curpage - 1
        this.getData()
      } else {
        alert('这是第一页,不可再往前翻')
      }
    },
    validate () {
      var isIllege = false
      if (/^\d+$/.test(this.goods_id) === false) {
        this.hintText = '商品id必须为整数'
      } else if (/^\d+$/.test(this.expired_day) === false) {
        this.hintText = '有效时间必须为整数'
      } else if (/^\d+$/.test(this.all_times) === false) {
        this.hintText = '有效次数必须为整数'
      } else {
        isIllege = true
        this.hintText = ''
      }
      return isIllege
    },
    getData () {
      var data = {
        rootName: 'goods',
        limit: this.limit,
        page: this.curpage
      }
      request.get(this.route, data, function (data) {
        this.items = data
        if (data.length < this.limit) {
          this.isend = true
        } else {
          this.isend = false
        }
        // console.log(data)
      }.bind(this), function (error) {
        console.log(error)
      })
    }
  }
}

</script>

<style>
  div.form {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  .form-horizontal {
    position: relative;
    margin-top: 50px;
  }
  .form-horizontal .form-group {
    display: table;
    width: 360px;
  }
  .form-group {
    margin-bottom: 60px;
  }
  .form-horizontal .form-group label,
  .form-horizontal .form-group input {
    display: table-cell;
  }
  .form-control {
    border: 1px solid #666;
    width: 245px;
    height: 30px;
    font-size: 16px;
    padding-left: 5px;
    border-radius: 2px;
  }
  .control-label {
    width: 100px;
    font-size: 18px;
    color: #000;
    text-align: right;
    padding-right: 5px;
  }
  .btn {
    float: right;
    background: #fff;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .hint {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    font-size: 16px;
    color: red;
    text-align: center;
  }
</style>
