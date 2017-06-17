/**
 * 通用函数
 */
import Vue from 'vue'
export default {
  toTop: function () {
    document.body.scrollTop = 0
  },
  toToast: function (msg) {
    Vue.toast(msg, {
      mode: 'override',
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1000,
      className: 'toast'
    })
  }
}
