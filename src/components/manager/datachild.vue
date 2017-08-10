<template>
  <div id="cochild">
     <div id="c_timebar">
        <span id="timetxt">时间</span>
        <input id="stime" type="datetime-local" v-model="date1">
          <span>到</span>
          <input id="endtime" type="datetime-local" v-model="date2">
          <input id="check1" type="button" name="" @click="getdata" value="查询" />
     </div>
       <div id="charts" v-show="gotdate">
          <div id="main" style="width: 800px;height:400px;"></div>
       </div>
  </div>
</template>
<script>
import mrequest from '../../common/mrequest'
import utils from '../../common/utils'
export default {
  name: 'datachild',
  data: function () {
    return {
      date1: '',
      date2: '',
      gotdate: false,
      state1: true,
      data: [],
      data1: [],
      nowtime: ''
    }
  },
  watch: {
    agent: function (oldval, newval) {
      this.gotdate = false
    }
  },
  props: ['agent'],
  created: function () {
    this.$router.name = this.$route.name
    var time = new Date()
    var y = time.getFullYear()
    var m = time.getMonth() + 1
    var d = time.getDate()
    var h = time.getHours()
    var mm = time.getMinutes()
    m = m + ''
    d = d + ''
    if (m.length === 1) {
      m = '0' + m
    }
    if (d.length === 1) {
      d = '0' + d
    }
    this.nowtime = y + '-' + m + '-' + d + 'T' + h + ':' + mm
  },
  methods: {
    getdata: function () {
      if (this.date1 !== '' && this.date2 !== '' && this.agent !== '' && this.date1 < this.date2 && this.date2 < this.nowtime) {
        if (this.state1 === true) {
          this.state1 = false
          var reg = new RegExp('T', 'g')
          var date1 = this.date1.replace(reg, ' ')
          var date2 = this.date2.replace(reg, ' ')
          mrequest.get(this.$router, {
            rootName: 'trade',
            search: this.agent,
            start_time: date1,
            end_time: date2
          }, function (data) {
            this.gotdate = true
            this.data = []
            console.log(data)
            this.state1 = true
            for (var p1 in data) {
              if (data.hasOwnProperty(p1)) {
                this.data.push(p1)
              }
              this.data1.push(data[p1])
            }
            this.m(this.data, this.data1)
          }.bind(this), function (err) {
            console.log(err)
            utils.toToast('请求失败')
            this.state1 = true
          }.bind(this))
        }
      } else {
        utils.toToast('请输入正确的日期,或填写完整信息')
      }
    },
    m: function (key, value) {
      var myChart = this.$echarts.init(document.getElementById('main'))
      myChart.setOption({
        title: {
          text: '链接点击量',
          subtext: '示意图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['链接点击量']
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            interval: 0,
            rotate: 90
          },
          data: key
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            name: '链接点击量',
            type: 'line',
            data: value,
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      })
    }
  }
}
</script>
<style>
#cochild
{
   color: black;
   font-size: 18px;
   float: left;
   padding-top: 27px;
   padding-left: 73px;
   min-width: 1000px;
   height: auto;
   position: relative;
}
input
{
  border: black solid 1px;
}
#stime
{
  margin-left: 20px;
  margin-right: 7px;
}
#endtime
{
  margin-left: 7px;
}
#cochild #check1,#cochild #check2
{
  margin-left: 17px;
  width: 80px;
  background-color: white;
  height: 30px;
}
#c_order1
{
  width: 300px;
  height: 28px;
}
#c_orderbar span
{
  display: inline-block;
  width: 120px;
  text-align: center;
  font-size: 18px;
  padding:5px 0 5px 0;
  border: black solid 1px;
  margin-right: 10px;
}
#c_timebar #timetxt
{
  display: inline-block;
  width: 50px;
  text-align: center;
  font-size: 18px;
  padding:5px 0 5px 0;
  border: black solid 1px;
}
#c_orderbar,#c_timebar
{
  position: absolute;
  top: 27px;
  left: 73px;
}
#charts
{
  margin-top: 100px;
  margin-left: 30px;
  float: left;
  width: 800px;
  height:400px;
}
</style>
