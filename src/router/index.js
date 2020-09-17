import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Category from '@/components/category/Category'
import Guidang from '@/components/guidang/Guidang'
import Lianjie from '@/components/lianjie/Lianjie'
import guanyuwo from '@/components/guanyuwo/guanyuwo'
import Index from '@/components/index/Index'
import Admin from '@/components/admin/Admin'
import Article from '@/components/article/Article'
import Create from '@/components/create/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
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
        },
        {
          path:'/guanyuwo',
          name:'guanyuwo',
          component: guanyuwo
        }
      ],
      redirect: '/home'
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/article',
          name: 'Article',
          component: Article
        },{
          path: '/create',
          name: 'Create',
          component: Create
        },

      ],
    }


  ]
})
