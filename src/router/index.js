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
import myaddress from '@/components/myaddress'
import newaddress from '@/components/newaddress'
import message from '@/components/message'
import edit from '@/components/edit'
import logdetail from '@/components/logisticsdetail'
import order from '@/components/order'
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
    {path: '/myaddress', name: 'myaddress', component: myaddress},
    {path: '/newaddress', name: 'newaddress', component: newaddress},
    {path: '/cart', name: 'cart', component: cart},
    {path: '/message', name: 'message', component: message},
    {path: '/edit', name: 'edit', component: edit},
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
    {path: '/order', name: 'order', component: order},
    {path: '/orderDetail', name: 'orderDetail', component: orderDetail}
  ]
})
