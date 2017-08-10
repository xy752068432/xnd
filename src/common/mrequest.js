/**
 * Http 请求通用函数封装
 */
import axios from 'axios'

String.prototype.format = function (args1) {
  var result = this
  if (arguments.length > 0) {
    if (arguments.length === 1 && typeof (args1) === 'object') {
      for (var key in args1) {
        if (args1[key] !== undefined) {
          var mreg = new RegExp('({' + key + '})', 'g')
          result = result.replace(mreg, args1[key])
        }
      }
    } else {
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) {
          var mreg = new RegExp('({)' + i + '(})', 'g')
          result = result.replace(mreg, arguments[i])
        }
      }
    }
  }
  return result
}

var preFix = '/api'
/**
 * [api请求地址]
 * @key {string} 路由名称
 * @value {Object}
 */
var urls = {
  goods: '/v1/goods?page={page}&limit={limit}',
  agentLogin:'/v1/agent/login',
  agent:'/v1/agent',
  addcoupon:'/v1/agent/{agent_id}/coupon',
  coupon:'/v1/agent/{agent_id}/coupon?limit={limit}&page={page}',
  c_time: '/v1/agent/1/order?search={agent_id}&start_time={start_time}&end_time={end_time}&page={page}',
  c_order: '/v1/agent/1/order/{order_id}?search={agent_id}',
  trade: '/v1/agent/1/order/trade?search={search}&start_time={start_time}&end_time={end_time}'
}

/*
    获取目标url

    router: 路由对象
 */

/* var getUrl = function (router) {
  let bindObj = {uid: localStorage.getItem('id')}
  return preFix + urls[router.name].format(bindObj)
} */

var getUrl = function (router, data) {
  data.agent = localStorage.getItem('agent_id')
  var routerName = data.rootName ? data.rootName : router.name
  data.rootName = undefined
  return preFix + urls[routerName].format(data)
}
/*
    http get 请求封装
    method: 请求http方式
    router: 路由对象
    data: http 请求body数据
    successFun: 成功回调函数
    errorFun: 错误回调函数,可不传
    router: 跳转路由
 */
var mrequest = function (method, router, data, successFun, errorFun) {
  axios.request({
    method: method,
    url: getUrl(router, data),
    data: data,
    timeout: 5000,
    headers: {
      'Authorization': localStorage.getItem('token')
    }
  })
  .then(function (response) {
    console.log('成功')
    // 自定义成功处理函数
    if (successFun) {
      successFun(response.data)
    } else {
      let rst = response.data
      // 有错误码返回,提示错误信息
      if (rst.code) {
        alert(rst.msg)
      }
    }
  })
  .catch(function (error) {
    console.log('失败')
    if ((/timeout/g.test(error))) {
      errorFun(error)
    }

    if (error.response) {
      // 特殊情况统一处理

      if (error.response.status === 404) {
        // 越权访问
        if (process.env.NODE_ENV === 'development') {
          router.push({path: '/manager/login'})
        } else {
          window.location.href = '/api/v1/login3?my_callback=' + encodeURIComponent(window.location.href)
        }
        return
      }
      if (error.response.data &&
        error.response.data.code === 3) {
        // 未登录或者登录已经过期
        if (process.env.NODE_ENV === 'development') {
          router.push({path: '/manager/login'})
        } else {
          window.location.href = '/api/v1/login3?my_callback=' + encodeURIComponent(window.location.href)
        }
        return
      }
      if (error.test)
      // 自定义错误函数
      if (errorFun) {
        errorFun(error)
      } else {
      // 默认错误处理函数
        let msg = error.response.data.msg
        if (msg instanceof Object) {
          alert(JSON.stringify(msg))
        } else {
          alert(msg)
        }
      }
    }
  })
}

/*
    http get 请求封装
 */
var get = function (router, data, successFun, errorFun) {
  mrequest('get', router, data, successFun, errorFun)
}

/*
    http post 请求封装
 */
var post = function (router, data, successFun, errorFun) {
  mrequest('post', router, data, successFun, errorFun)
}

/*
    http get 请求封装
 */
var put = function (router, data, successFun, errorFun) {
  mrequest('put', router, data, successFun, errorFun)
}

/*
    http get 请求封装
 */
var patch = function (router, data, successFun, errorFun) {
  mrequest('patch', router, data, successFun, errorFun)
}
/*
   http delete
 */
var DELETE = function (router, data, successFun, errorFun) {
  mrequest('DELETE', router, data, successFun, errorFun)
}
export default {
  get: get,
  post: post,
  put: put,
  patch: patch,
  delete: DELETE
}
