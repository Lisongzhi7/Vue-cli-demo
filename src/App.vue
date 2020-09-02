<template>
  <div id="app">
    <div class="fd-head">
      <div class="fd-head-center">
        <div class="fd-logo-box">
          <span class="logo-one"><img src="/static/image/card5.jpg"></span>
        <span class="boke">My blog site</span>
        </div>
        <div class="fd-logo-tile">
          <router-link to="/home"><span>博客首页</span></router-link>
          <router-link to="/category"><span>文章分类</span></router-link>
          <router-link to to="/guidang"><span>文章归档</span></router-link>
          <router-link to="/lianjie"><span>友情链接</span></router-link>
          <router-link to="/guanyuwo"><span>关于我</span></router-link>
          <span><i class="el-icon-search"></i></span>
        </div>
      </div>
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
  data() {
    return {
      articles: [
        {
          title: "vue学习笔记",
          desc: "从基础的Vue学习，掌握方法，做好笔记，扎实学好入门Vue",
          time: "2020年08月27日",
          author: "李松直",
          tag: [
            {
              name: "Vue"
            },
            {
              name: "javaScript"
            },
            {
              name: "前端"
            },
            {
              name: "学习笔记"
            }
          ]
        },
        {
          title: "Html学习笔记",
          desc: "了解并掌握Html语义，用法，从最基础的做起，养成做笔记的习惯",
          time: "2020年08月27日",
          author: "李松直",
          tag: [
            {
              name: "Vue"
            },
            {
              name: " 初级"
            },
            {
              name: "Html"
            },
            {
              name: "学习笔记"
            }
          ]
        },
        {
          title: "Git学习笔记",
          desc: "Git，分布式版本控制系统，git支持分布式部署，可以有效、高速的处理从很小到非常大的项目版本管理。",
          time: "2020年08月26日",
          author: "李松直",
          tag: [
            {
              name: "Git"
            },
            {
              name: "代码管理"
            }
          ]
        },
        {
          title: "日常读书",
          desc: "读书积累知识，理解并掌握其核心知识，懂得温故而知新",
          time: "2020年08月26日",
          author: "李松直",
          tag: [
            {
              name: "读书"
            },
            {
              name: "记录"
            },
            {
              name: "理解"
            }
          ]
        },


      ],
      images: [
        {
          img: "/static/image/card1.jpg"
        },
        {
          img: "/static/image/card2.jpg"
        },
        {
          img: "/static/image/card3.jpg"
        }
      ]
    }
  },
  methods: {},
  mounted() {

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
  }
}

</script>

<style>

*, html, body {
  margin: 0;
  padding: 0;
}
.zujian{
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
  background: #fff;
  box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
}
a{
  text-decoration: none;
}
.fd-head-center {
  width: 1400px;
  height: 100%;
  display: flex;
}
.fd-logo-box{
  height: 80px;
  width: 250px;

display: flex;
  flex-direction: row;
}
.boke{
  font-size: 25px;
  font-family: 华文细黑;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
}
.logo-one{
  display: flex;
  justify-content: center;
  align-items: center;

}
.logo-one img{
  height: 66px;
  width: 66px;
  border-radius: 33px;
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
.router-link-active span{
  color: coral ;
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
.tubiao{
  font-size: 40px;
}


</style>
