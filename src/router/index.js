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
import Address from '@/components/center/Address'
import add from '@/components/center/Address/add'
import message from '@/components/center/message/message'
import update from '@/components/center/Address/update'
import order from '@/components/center/order/order'
import logistic from '@/components/center/order/logisticsdetail'
import preorder from '@/components/preorder'
import orderDetail from '@/components/orderDetail'
import addcart from '@/components/addcart'
Vue.use(Router)

const UserHome = { template: '<div>Home</div>' }

export default new Router({
  routes: [
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
    {path: '/person/Address', name: 'Address', component: Address},
    {path: '/person/Address/add', name: 'add', component: add},
    {path: '/cart', name: 'cart', component: cart},
    {path: '/person/message', name: 'message', component: message},
    {path: '/person/Address/update', name: 'update', component: update},
    {path: '/person/order/order', name: 'order', component: order},
    {path: '/person/order/logistic', name: 'logistic', component: logistic},
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
