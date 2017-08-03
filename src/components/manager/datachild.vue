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
      gotdate: true,
      state1: true,
      data: []
    }
  },
  watch: {
    agent: function (oldval, newval) {
      this.gotdate = false
    }
  },
  props: ['agent'],
  created: function () {

  },
  methods: {
    getdata: function () {
      if (this.date1 !== '' && this.date2 !== '' && this.agent !== '') {
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
            this.state1 = true
            this.data.push(data.value)
            console.log(this.data)
            this.m()
          }.bind(this), function (err) {
            console.log(err)
            utils.toToast('请求失败')
            this.state1 = true
          }.bind(this))
        }
      }
    },
    m: function () {
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
            rotate: 50
          },
          data: this.data
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
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
</style>
