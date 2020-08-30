import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Category from '@/components/category/Category'
import Guidang from '@/components/guidang/Guidang'
import Lianjie from '@/components/lianjie/Lianjie'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/guidang',
      name: 'Guidang',
      component: Guidang
    },
    {
      path: '/lianjie',
      name: 'Lianjie',
      component: Lianjie
    }
  ]
})
