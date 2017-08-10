<template>
  <footer class="page">
    <div class="left">
      <a href="javascript:void(0)" class="previous" @click="previous"></a>
      <span class="current">{{ fpage + 1 }}</span>/
      <span class="totel">{{ totel }}</span>
      <a href="javascript:void(0)" class="next" @click="next"></a>
      <a href="javascript:void(0)" class="end" @click="end">尾页</a>
    </div>
    <div class="right">
      <input type="text" name="page" class="form-control" v-model="fjpage">
      <a href="javascript:void(0)" class="jump" @click="jump">跳转</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerview',
  props: ['limit', 'page', 'jpage', 'totel'],
  data () {
    return {
      flimit: this.limit,
      fpage: this.page,
      fjpage: this.jpage,
      ftotel: this.totel
    }
  },
  methods: {
    next () {
      this.fpage = (this.fpage + 1) % this.totel
      this.$emit('pagnation', this.flimit, this.fpage)
    },
    end () {
      this.fpage = this.ftotel - 1
      this.$emit('pagnation', this.flimit, this.fpage)
    },
    jump () {
      this.fpage = ((this.fjpage - 1) % this.totel + this.totel) % this.totel
      this.$emit('pagnation', this.flimit, this.fpage)
    },
    previous () {
      this.fpage = (this.fpage - 1 + this.totel) % this.totel
      this.$emit('pagnation', this.flimit, this.fpage)
    }
  }
}
</script>

<style>
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
  width:40px;
  height: 25px;
}
</style>
