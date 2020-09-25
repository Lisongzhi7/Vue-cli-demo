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
import Excerpt from '@/components/excerpt/Excerpt'
import Trave from '@/components/trave/Trave'
import AboutMe from '@/components/aboutMe/AboutMe'
import Carousel from '@/components/carousel/Carousel'
import ArticleManagement from '@/components/articleManagement/ArticleManagement'
import FamousAphorism from '@/components/famousAphorism/FamousAphorism'
import MyTravel from '@/components/myTravel/MyTravel'
import Detail from '@/components/detail/Detail'

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
        },
        {
          path: '/famousAphorism',
          name: 'FamousAphorism',
          component: FamousAphorism
        },{
          path: '/myTravel',
          name: 'MyTravel',
          component: MyTravel
        },{
          path: '/detail',
          name: 'Detail',
          component: Detail
        },
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
          path: '/excerpt',
          name: 'Excerpt',
          component: Excerpt
        },{
          path: '/trave',
          name: 'Trave',
          component: Trave
        },{
          path: '/aboutMe',
          name: 'AboutMe',
          component: AboutMe
        },{
          path: '/carousel',
          name: 'Carousel',
          component: Carousel
        },{
          path: '/articleManagement',
          name: 'ArticleManagement',
          component: ArticleManagement
        },

      ],
    }


  ]
})
