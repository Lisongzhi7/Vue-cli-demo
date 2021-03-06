// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParticles from 'vue-particles'
import Api from './api/index.js'
import '@/assets/icon/iconfont.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.prototype.$api = Api
Vue.use(VueParticles)
Vue.use(mavonEditor)
Vue.use(ElementUI)
AOS.init();
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
