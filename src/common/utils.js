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
  },
  formatDate: function (date) {
    date = date + '000'
    date = parseInt(date)
    var time = new Date(date)
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    var formateTime = y + '年' + m + '月' + d + '日' + h + ':' + mm
    return formateTime
  }
}
