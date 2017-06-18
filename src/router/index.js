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
    {path: '/cart', name: 'cart', component: cart}

  ]
})
