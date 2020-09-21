<template>
<div class="guanyuwo">
  <div class="guanyuwo-head-head">
    <img src="http://xlsb.luokangyuan.com/30.jpg"/>
  </div>
  <div class="guanyuwo-center-head">
    <div class="guanyuwo-head">
      <div class="guanyuwo-a">
        <div class="guanyuwo-center">
          <div class="guanyuwo_ch"></div>
          <h2 class="title">关于我</h2>
          <div class="guanyuwo_en"></div>
        </div>
        <span class="title-a">About me</span>
      </div>
    </div>
    <div class="guanyuwo-zhong">
      <div class="zhong-head">
 <span>
        <el-radio-group v-model="radioButton" size="medium">
            <el-radio-button :label="true">我的曾经</el-radio-button>
            <el-radio-button :label="false">我的现在</el-radio-button>
        </el-radio-group>
    </span>
      </div>
      <div v-show="radioButton" class="guanyuwo-zhong-a">
        <div class="zhong-aa">
          <span>我的个人博客</span>
        </div>
        <div class="zhong-bb">
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
      <div v-show="!radioButton" class="guanyuwo-xia">
        <div class="xia-a">
          <img src="http://xlsb.luokangyuan.com/1.jpg"/>
          <span>木子李</span>
        </div>
        <div class="xia-b">
          <span>“我努力享受每一天，就像它是我这平凡又非凡生命的最后一天”</span>
        </div>
        <div class="xia-c">
          <span>今天是不是已经开始琢磨前几天日子都过到哪里去了？</span>
        </div>
        <div class="xia-d">
          <span>一边嗷嗷叫着宅得好难受，一边其实挺心慌的：除了刷手机啥也没干。</span>
        </div>
        <div class="xia-e">
          <span>
            感慨时间的时候，会变得沉默，会停下所有的动作，来好好想想怎么才能把握好时间。
          </span>
        </div>
        <div class="xia-f">
          <span>可是偶尔，我又会觉得时间慢得离谱。</span>
        </div>
        <div class="xia-g">
          <img src="http://xlsb.luokangyuan.com/31.jpg"/>
        </div>
        <div class="xia-h">
          <span>像是开一场漫长的大会，恰好坐在领导旁边，不敢乱动也不敢玩手机；参加一场不能提前交卷的考试，突然尿急；和亲戚应酬的饭桌上，脸上洋溢着假笑，心里却只想回家。全都是读秒体验。</span>
        </div>
        <div class="xia-i">
          <span>前几年有一部非常经典的时空穿越电影，叫《时空恋旅人》(别被片名误导，根本不是一个爱情片)，影片科幻外皮下包裹的是对时间的严肃探讨：</span>
        </div>
        <div class="xia-j">
          <span>假设你拥有时空穿梭的能力，你会怎么过你的一生，是尽情挥霍使它加速，还是抓住每一秒把时间无限延长？</span>
        </div>
        <div class="xia-k">
          <span>时间真的是匀速的吗</span>
        </div>
        <div class="xia-l">
          <span>为什么我却总觉得它忽快忽慢？</span>
        </div>
        <div class="xia-m">
          <span>虽然一小时确是60分钟，一分钟是由60秒组成，但对每个人而言，永远存在“相对时间”。有些时刻漫长得好像永远，有些时刻却转瞬即逝得像没发生过。</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Guanyuwo",
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
.guanyuwo{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.guanyuwo-head-head{
  height: 400px;
  width: 100%;
}
.guanyuwo-head-head img{
  height: 400px;
  width: 100%;
}
.guanyuwo-center-head {
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guanyuwo-head {
  height: 100px;
  width: 1300px;
  margin-top: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.guanyuwo-center {
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

.guanyuwo_ch {
  height: 1px;
  width: 100px;
  background: #000;
  margin-right: 30px;
  margin-top: 30px;
}

.guanyuwo_en {
  height: 1px;
  width: 100px;
  background: #000;
  margin-left: 30px;
  margin-top: 30px;
}

.guanyuwo-zhong {
  height: 1240px;
  width: 944px;
}

.zhong-head {
  height: 80px;
  width: 944px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.guanyuwo-zhong-a {
  height: 900px;
  width: 944px;
}

.zhong-aa {
  height: 70px;
  width: 944px;
  font-size: 24px;
  font-family: Alibaba-PuHuiTi-Regular;
  margin-top: 30px;
}

.zhong-bb {
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

.guanyuwo-xia {
  height: 600px;
  width: 944px;
}

.xia-a {
  height: 60px;
  width: 944px;
  font-family: Alibaba-PuHuiTi-Regular;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xia-a img{
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 30px;
}

.xia-b {
  height: 60px;
  width: 944px;
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: center;
}

.xia-c {
  height: 60px;
  width: 944px;
  font-family: Alibaba-PuHuiTi-Regular;
  margin-top: 20px;
}

.xia-d {
  height: 60px;
  width: 944px;
  font-family: Alibaba-PuHuiTi-Regular;
}

.xia-e {
  height: 60px;
  width: 944px;
  font-family: Alibaba-PuHuiTi-Regular;
}

.xia-f {
  height: 60px;
  width: 944px;
  font-family: Alibaba-PuHuiTi-Regular;
}

.xia-g {
  height:400px;
  width: 944px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.xia-h {
  height: 80px;
  width: 944px;
margin-top: 20px;
  font-family: Alibaba-PuHuiTi-Regular;
}

.xia-i {
  height: 70px;
  width: 944px;
  font-family: Alibaba-PuHuiTi-Regular;

}
.xia-j{
  height: 60px;
  width: 944px;
  font-family: Alibaba-PuHuiTi-Regular;
}
.xia-k{
  height: 40px;
  width: 944px;
  font-size: 20px;
  font-family: Alibaba-PuHuiTi-Regular;
  display: flex;
  align-items: center;
  justify-content: center;
}
  .xia-l{
    height: 40px;
    width: 944px;
    font-size: 20px;
    font-family: Alibaba-PuHuiTi-Regular;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .xia-m{
    margin-top: 20px;
    height: 60px;
    width: 944px;
    font-family: Alibaba-PuHuiTi-Regular;
  }
</style>
