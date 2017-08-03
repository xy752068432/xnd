<template>
  <div class="form form-horizontal">
    <div class="hint">{{ hintText }}</div>
    <div class="form-group">
      <label class="control-label">商品</label>
      <input type="text"  class="form-control" name="goods_id" v-model="goods_id">
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
      <button type="button" class="btn" @click="submit"><img src="./../../assets/admin/submit.png"></button>
    </div>
  </div>
</template>

<script>
import request from './../../common/request'
export default {
  name: 'addCoupon',
  data () {
    return {
      goods_id: '',
      price: '',
      expired_day: '',
      start_time: '',
      all_times: '',
      hintText: 'ssssssssssssss',
      isSubmit: false
    }
  },
  methods: {
    submit () {
      if (this.isSubmit) {
        return
      }
      var isIllege = this.validate()
      if (!isIllege) {
        return
      }
      this.isSubmit = true
      var mydata = {
        'rootName': 'agent',
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
    validate () {
      var isIllege = false
      if (/^\d+$/.test(this.username) === false) {
        this.hintText = '商品id必须为整数'
      } else if (typeof this.price !== 'number') {
        this.hintText = '价格必须为数字'
      } else if (/^\d+$/.test(this.expired_day) === false) {
        this.hintText = '有效时间必须为整数'
      } else if (/^\d+$/.test(this.all_times) === false) {
        this.hintText = '有效次数必须为整数'
      } else {
        isIllege = true
        this.hintText = ''
      }
      return isIllege
    }
  }
}

</script>

<style>
  .form-horizontal {
    position: relative;
    margin-top: 150px;
  }
  .form-horizontal .form-group {
    display: table;
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
    vertical-align: middle;
    padding-left: 5px;
    border-radius: 2px;
  }
  .control-label {
    width: 100px;
    font-size: 18px;
    color: #000;
    text-align: right;
    vertical-align: middle;
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
