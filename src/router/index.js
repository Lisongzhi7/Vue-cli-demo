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
import Paga from '@/components/paga/Paga'
import Excerpt from '@/components/excerpt/Excerpt'
import Trave from '@/components/trave/Trave'
import Newest from '@/components/newest/Newest'
import Diary from '@/components/diary/Diary'
import Record from '@/components/record/Record'
import TimerShaft from '@/components/timerShaft/TimerShaft'
import AboutMe from '@/components/aboutMe/AboutMe'

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
        },{
          path: '/paga',
          name: 'Paga',
          component: Paga
        },{
          path: '/excerpt',
          name: 'Excerpt',
          component: Excerpt
        },{
          path: '/trave',
          name: 'Trave',
          component: Trave
        },{
          path: '/newest',
          name: 'Newest',
          component: Newest
        },{
          path: '/diary',
          name: 'Diary',
          component: Diary
        },{
          path: '/record',
          name: 'Record',
          component: Record
        },{
          path: '/timerShaft',
          name: 'TimerShaft',
          component: TimerShaft
        },{
          path: '/aboutMe',
          name: 'AboutMe',
          component: AboutMe
        },

      ],
    }


  ]
})
