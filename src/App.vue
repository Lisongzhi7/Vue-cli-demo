<template>
  <div id="app">
    <div v-if="!showNav" class="fd-head">
      <div class="fd-head-center">
        <div class="fd-logo-box">
          <span class="logo-one"><img src="/static/image/card6.png"></span>
          <span class="boke">My blog site</span>
        </div>
        <div class="fd-logo-tile">
          <router-link to="/home"><span>博客首页</span></router-link>
          <router-link to="/category"><span>文章分类</span></router-link>
          <router-link to="/guidang"><span>文章归档</span></router-link>
          <router-link to="/lianjie"><span>友情链接</span></router-link>
          <router-link to="/guanyuwo"><span>关于我</span></router-link>
          <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
        </div>
      </div>
      <el-dialog  :modal-append-to-body="false" :show-close="false"  title="搜索" :visible.sync="dialogFormVisible">
        <div class="zhezhao"></div>
      </el-dialog>
    </div>
    <div v-if="showNav" class="fd-head second ">
      <div class="fd-head-center">
        <div class="fd-logo-box">
          <span class="logo-one"><img src="/static/image/card6.png"></span>
          <span class="boke">My blog site</span>
        </div>
        <div class="fd-logo-tile wenzi">
          <router-link to="/home"><span>博客首页</span></router-link>
          <router-link to="/category"><span>文章分类</span></router-link>
          <router-link to="/guidang"><span>文章归档</span></router-link>
          <router-link to="/lianjie"><span>友情链接</span></router-link>
          <router-link to="/guanyuwo"><span>关于我</span></router-link>
          <span @click="dialogFormVisible = true"><i class="el-icon-search"></i></span>
        </div>
      </div>
      <el-dialog  :modal-append-to-body="false" :show-close="false"  title="搜索" :visible.sync="dialogFormVisible">
        <div class="zhezhao"></div>
      </el-dialog>
    </div>
    <div class="fd-center">
      <router-view></router-view>
    </div>
    <div class="fd-bottom">
      蜀ICP备18020377号
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      dialogFormVisible:false,
        showNav:true
    }
  },

  created() {
    setTimeout(() => {
      window.L2Dwidget.init({
        pluginRootPath: 'static/live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: 'live2d-widget-model-z16/assets/',
        tagMode: false,
        debug: false,
        model: {jsonPath: '/static/live2dw/live2d-widget-model-wanko/assets/wanko.model.json'},
        display: {position: 'left', width: 250, height: 300},
        mobile: {show: true},
        log: false
      })
    }, 1000)
  },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{

        handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop > 100){
                this.showNav = true;
            }else if(scrollTop < 100) {
                this.showNav = false;
            }
        },
    }
}

</script>

<style>

*, html, body {
  margin: 0;
  padding: 0;
}

.zhezhao {
  height: 200px;
  width: 200px;
}

.zujian {
  font-size: 50px;
  color: #fad0c4;
}

#app {
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.fd-head {
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
}
.second{
    background: #a8edea;
}
a {
  text-decoration: none;
}

.fd-head-center {
  width: 1400px;
  height: 100%;
  display: flex;
}
.fd-logo-box {
  height: 80px;
  width: 250px;

  display: flex;
  flex-direction: row;
}

.boke {
  font-size: 25px;
  font-family: 华文细黑;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  font-weight: bold;
}

.logo-one {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-one img{
  height: 60px;
}

.fd-logo-tile {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.fd-logo-tile span {
  margin-left: 10px;
  font-size: 17px;
  color: #2e3032;
  font-family: "Microsoft YaHei";
}
.wenzi span{
    color: #fff;
}
.router-link-active span {
  color: coral;
}

.fd-center {
  display: flex;
  min-height: 200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
}

.fd-bottom {
  display: flex;
  width: 100%;
  height: 60px;
  background: black;
  color: white;
  justify-content: center;
  align-items: center;
}

.tubiao {
  font-size: 40px;
}


</style>
