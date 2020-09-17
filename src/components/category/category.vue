<template>
  <div class="category">
    <div class="fenlei">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="fenlei-center-head">
      <div class="fenlei-head">
        <div class="fenlei-a">
          <div class="fenlei-center">
            <div class="fenlei_ch"></div>
            <h2 class="title">我的分类</h2>
            <div class="fenlei_en"></div>
          </div>
          <span class="title-a">Classify</span>
        </div>
      </div>
      <div class="fenlei-zhong">
        <div class="zhong-head">
 <span>
        <el-radio-group v-model="radioButton" size="medium">
            <el-radio-button :label="true">博客简述</el-radio-button>
            <el-radio-button :label="false">分类简述</el-radio-button>
        </el-radio-group>
    </span>
        </div>
        <div v-show="radioButton" class="fenlei-zhong-a">
          <div class="zhong-a">
            <span>我的个人博客</span>
          </div>
          <div class="zhong-b">
            <span>从一开始的无从下手，毫无思绪，慢慢了解，慢慢进步，我相信，终会在雨后遇见彩虹的</span>
          </div>
          <div class="zhong-c">
            <span>个人博客主要是通过用idea编程软件来写的，主要运用了HTNML，CSS，JavaScript以及Vue知识来撰写的,<br>主要采用六个界面来写的，博客首页，文章分类，文章归档，友情链接，关于我，以及管理系统界面，主要是利用Vue-cli脚手架来搭建的一个项目，详情可在github上了解</span>
          </div>
          <div class="zhong-d">
            <img src="http://xlsb.luokangyuan.com/28.jpg"/>
          </div>
          <div class="zhong-e">
            <span>成长，带走的不只是时光，还带走了当初那些不害怕失去的勇气。人一定要经得起假话，受得起敷衍，忍得住欺骗，忘得了诺言，放得下一切。我们总是在最不懂爱情的时候，遇到最美的爱情，然后错过。</span>
          </div>
          <div class="zhong-f">
            <span>如果你笑，全世界都会陪着你笑，你给世界一缕阳光，那么世界也就还你一个春天。为什么不勇敢地做自己一次看看。做你想要做的事情，因为能找到自己真正想要的事情就已经很难得了。</span>
          </div>
          <div class="zhong-g">
            <span>为了让自己被人记住，我们一次又一次在内心塑造一个不像自己的自己。比别人更坚强，比别人更能伪装，比别人更能委屈自己，也比别人更柔软。直到有一天，遇见一个人，他们说：不要太辛苦，做你自己就好。</span>
          </div>
          <div class="zhong-h">
            <span>或许这就是人生，一个人呼吸，走路，只为了有朝一日会转过头回顾，见到自己被留在身后，然后认出后方在每个阶段蜕变而死去的自己，并对每往前跨进一步时所留下的债，漠然以待。</span>
          </div>
          <div class="zhong-i">
            <span>一个人如果连自己都不珍惜，又怎会有人珍惜?许多时候，你觉得没人爱你，没人疼你，没有对你好，首先就得反思一下，你自己是否爱自己，是否疼自己，是否对自己好。自私确实不好，但完全的无私就是对自己的伤害。所以啊，爱人先爱己。你爱自己有多少，别人爱你才有多少。</span>
          </div>
        </div>
        <div v-show="!radioButton" class="fenlei-xia">
          <div class="xia-a">
            <span>分类简述</span>
          </div>
          <div class="xia-b">
            <span>成为全球领先的“网站设计、网站制作、网站优化”解决方案提供商</span>
          </div>
          <div class="xia-c">
            <span>公司使命</span>
          </div>
          <div class="xia-d">
            <span>助力网站设计、助力网站制作、助力网站优化</span>
          </div>
          <div class="xia-e">
            <span>文化理念</span>
          </div>
          <div class="xia-f">
            <span>共同创业、共同创新、共享平台、共同发展</span>
          </div>
          <div class="xia-g">
            <span>企业精神</span>
          </div>
          <div class="xia-h">
            <span>以客户为中心、以质量为根本 以国家和企业为荣、不忘初心</span>
          </div>
          <div class="xia-i">
            <span>我的初接触</span>
          </div>
          <div class="xia-j">
            <span>当我刚开始接触Web前端的时候，一切都是那么的陌生，看着别人的作品，真觉得自己是一个菜鸡，什么都不懂的菜鸡</span>
          </div>
          <div class="xia-k">
            <span>人的一生都在学习，只是学习的多与少而已，既然选择了这一条路，我就坚持坚持再坚持的走下去，既然选择了，就不后悔</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    data() {
      return {
        radioButton: true,
      }
    }

  }

</script>

<style scoped>
  @font-face {
    font-family: 'Alibaba-PuHuiTi-Regular';
    src: url('/static/font/Alibaba-PuHuiTi-Regular.otf') format('truetype');
  }

  .category {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .fenlei {
    height: 400px;
    width: 100%;
    background: #a8edea;
  }

  .fenlei img {
    height: 400px;
    width: 100%;
  }

  .fenlei-center-head {
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fenlei-head {
    height: 100px;
    width: 1300px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fenlei-center {
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 28px;
  }

  .title-a {
    color: #666;
    display: flex;
    justify-content: center;
  }

  .fenlei_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .fenlei_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }

  .fenlei-zhong {
    height: 1150px;
    width: 944px;
  }

  .zhong-head {
    height: 80px;
    width: 944px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fenlei-zhong-a {
    height: 900px;
    width: 944px;
  }

  .zhong-a {
    height: 70px;
    width: 944px;
    font-size: 24px;
    font-family: Alibaba-PuHuiTi-Regular;
  }

  .zhong-b {
    height: 70px;
    width: 944px;
    font-family: Alibaba-PuHuiTi-Regular;
    font-size: 18px;
  }

  .zhong-c {
    height: 120px;
    width: 944px;
    font-size: 14px;
    color: #adadad;
  }

  .zhong-d {
    height: 400px;
    width: 944px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zhong-d img {
    height: 330px;
    width: 500px;
  }

  .zhong-e {
    height: 80px;
    width: 944px;
    font-size: 14px;
    color: #adadad;
    margin-top: 35px;
  }

  .zhong-f {
    height: 110px;
    width: 944px;
    font-size: 14px;
    color: #adadad;
  }

  .zhong-g {
    height: 70px;
    width: 944px;
    font-size: 14px;
    color: #adadad;
  }

  .zhong-h {
    height: 70px;
    width: 944px;
    font-size: 14px;
    color: #adadad;
  }

  .zhong-i {
    height: 80px;
    width: 944px;
    font-size: 14px;
    color: #adadad;
  }

  .fenlei-xia {
    height: 600px;
    width: 944px;
  }

  .xia-a {
    height: 60px;
    width: 944px;
    font-family: Alibaba-PuHuiTi-Regular;
    font-size: 20px;
  }

  .xia-b {
    height: 60px;
    width: 944px;
    color: #adadad;
  }

  .xia-c {
    height: 60px;
    width: 944px;
    font-family: Alibaba-PuHuiTi-Regular;
    font-size: 20px;
  }

  .xia-d {
    height: 60px;
    width: 944px;
    color: #adadad;
  }

  .xia-e {
    height: 60px;
    width: 944px;
    font-family: Alibaba-PuHuiTi-Regular;
    font-size: 20px;
  }

  .xia-f {
    height: 60px;
    width: 944px;
    color: #adadad;
  }

  .xia-g {
    height: 60px;
    width: 944px;
    font-family: Alibaba-PuHuiTi-Regular;
    font-size: 20px;
  }

  .xia-h {
    height: 60px;
    width: 944px;
    color: #adadad;
  }

  .xia-i {
    height: 60px;
    width: 944px;
    font-family: Alibaba-PuHuiTi-Regular;
    font-size: 20px;
  }
  .xia-j{
    height: 60px;
    width: 944px;
    color: #adadad;
  }
  .xia-k{
    height: 60px;
    width: 944px;
    color: #adadad;
  }


</style>
