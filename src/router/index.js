import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/user/Index'
import UserInfo from '@/components/user/Info'
import Login from '@/components/Login'
import Index from '@/components/Index'
// import home from '@/components/home'
import detail from '@/components/detail'
import center from '@/components/center'
import cart from '@/components/cart'
import myaddress from '@/components/center/address/myaddress'
import newaddress from '@/components/center/address/newaddress'
import message from '@/components/center/message/message'
import edit from '@/components/center/address/edit'
import logdetail from '@/components/center/dingdan/logisticsdetail'
import alldingdan from '@/components/center/dingdan/alldingdan'
import willpay from '@/components/center/dingdan/willpay'
import willgive from '@/components/center/dingdan/willgive'
import willget from '@/components/center/dingdan/willget'
import all from '@/components/center/dingdan/all'
import preorder from '@/components/preorder'
import orderDetail from '@/components/orderDetail'
import addcart from '@/components/addcart'
Vue.use(Router)

const UserHome = { template: '<div>Home</div>' }

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index,
    //   children: [
    //     {path: '/detail', name: 'detail', component: detail}
    //   ]
    // },
    {path: '/', name: 'Index', component: Index},
    {path: '/login', name: 'Login', component: Login},
    {
      path: '/user',
      name: 'User',
      component: UserIndex,
      children: [
        {path: 'home', name: 'UserHome', component: UserHome},
        {path: 'info', name: 'UserInfo', component: UserInfo}
      ]
    },
    {path: '/detail', name: 'detail', component: detail},
    {path: '/person', name: 'person', component: center},
    {path: '/person/myaddress', name: 'myaddress', component: myaddress},
    {path: '/person/newaddress', name: 'newaddress', component: newaddress},
    {path: '/cart', name: 'cart', component: cart},
    {path: '/person/message', name: 'message', component: message},
    {path: '/person/address/edit', name: 'edit', component: edit},
    {
      path: '/person/alldingdan',
      name: 'alldingdan',
      component: alldingdan,
      children: [
        {path: '/person/alldingdan/willpay', name: 'willpay', component: willpay},
        {path: '/person/alldingdan/willgive', name: 'willgive', component: willgive},
        {path: '/person/alldingdan/willget', name: 'willget', component: willget},
        {path: '/person/alldingdan/all', name: 'all', component: all}
      ]
    },
    {path: '/logdetail', name: 'logdetail', component: logdetail},
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      children: [
        {path: 'addcart', name: 'addcart', component: addcart}
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {path: '/preorder', name: 'preorder', component: preorder},
    {path: '/orderDetail', name: 'orderDetail', component: orderDetail}
  ]
})
