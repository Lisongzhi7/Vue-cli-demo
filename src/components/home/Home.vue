<template>
  <div class="home">
    <!---------------走马灯--------------------->
    <div class="home-head">
      <el-carousel :interval="5000" arrow="always" height="600px">
        <el-carousel-item v-for="(item,index) of imglist">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!------------我的首页------------------>
    <div class="home-center">
      <div class="center-head">
        <div class="center-head-center">
          <div class="center-head_ch"></div>
          <h2 class="title3">我的首页</h2>
          <div class="center-head_en"></div>
        </div>
        <span class="title-c">About us</span>
      </div>
      <div class="center-center">
        <div class="center-center-zuo">
          <img src="http://xlsb.luokangyuan.com/11.jpg">
        </div>
        <div class="center-center-you">
          <div class="you-head">
                    <span>
                        我珍惜每个评论过我的人，正因不会有人闲得蛋疼,去在乎你的情绪。性命即使没有轰轰烈烈也无后人之仰慕，
                        却无不让人感到一种生存的神圣与尊严。咱们乐为平凡之辈而不落于平庸之流，咱们不甘受辱，咱们不会沉沦，
                        咱们平凡生命，才知道平凡的情感事业人生境界里，原来有那么多姿多彩，灿烂绚丽。
                    </span>
          </div>
          <div class="you-center">
                    <span>
                        做自己的太阳，给自己一个微笑，今天会比昨天更好！
                    </span>
          </div>
        </div>
      </div>
      <div class="center-bottom">
        <el-button round>查看更多</el-button>
      </div>
      <div class="center-icon">
        <div v-for="(item,index) of list" class="icon-a">
          <div class="icon-b"><span><i :class="item.icon"></i></span></div>
          <div class="icon-c"><span>{{item.name}}</span></div>
          <div class="icon-e"><span>{{item.title}}</span></div>
          <div class="icon-f"><span>{{item.desc}}</span></div>
        </div>
      </div>
    </div>
    <!----------我的介绍-------------->
    <div class="home-center-a">
      <div class="home-center-aa">
        <div class="center-aa-a">
          <div class="home-center-head">
            <div class="head-center_ch"></div>
            <h2 class="title2">美文摘抄</h2>
            <div class="head-center_en"></div>
          </div>
          <span class="title-b">Excerpt</span>
        </div>
      </div>
      <div class="center-zhongbu">
        <div v-for="(item,index) of List" id="content">
          <article
            class="post-152 post type-post status-publish format-standard hentry category-people category-photos">
            <div class="post-format-content">
              <div class="post-thumbnail"><img width="480" height="640" :src="item.image"
                                               class="attachment-thumbnail wp-post-image" alt="105694702"></div>
              <div class="content-wrap">
                <p class="entry-title"><a href="" class="featured-image" rel="bookmark">{{item.desc}}</a></p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="center-xia">
        <el-button round>查看更多</el-button>
      </div>
      <div class="jieshao">
        <div class="jieshao-head">
          <div class="jieshao-a">
            <div class="jieshao-a_ch"></div>
            <h2 class="title3">我的旅游</h2>
            <div class="jieshao-a_en"></div>
          </div>
          <span class="title-c">Travel</span>
        </div>
      </div>
      <div class="jieshao-center">
        <div class="jieshao-center_head">
          <div class="jieshao_a">
            <div class="jieshao_a_head">
              <span>旅游地点</span>
              <div class="jieshao_a_xiahua"></div>
            </div>
            <div class="jieshao_a_center">
              <span>青岛</span>
            </div>
            <div class="jieshao_a_bottom">
              <div class="jieshao_bottom">
                <span>1、本人开朗大方，勤奋上进;富有感染力，表达能力与沟通能力强，善于学习和接受新事物;追求和谐，有团队合作精神。2、工作认真负责，有较强的敬业精神和责任心;专业知识扎实，能熟练运用预算软件、资料软件、办公软件;具有良好的施工现场管理经验及勾通协调能力。为人诚恳、工作敬业、吃苦耐劳、实战肯干型，付有超强团队合作精神。表达能力适应能力强逻辑思维清晰.</span>
              </div>
            </div>

          </div>
          <div class="jieshao_b">
            <img src="http://xlsb.luokangyuan.com/17.jpg">
          </div>
        </div>
        <div class="jieshao-center_head">
          <div class="jieshao_b">
            <img src="http://xlsb.luokangyuan.com/19.jpg">
          </div>
          <div class="jieshao_a">
            <div class="jieshao_a_head">
              <span>旅游地点</span>
              <div class="jieshao_a_xiahua"></div>
            </div>
            <div class="jieshao_a_center">
              <span>南京</span>
            </div>
            <div class="jieshao_a_bottom">
              <div class="jieshao_bottom">
                <span>本人任职期间爱岗敬业，勤勉不懈。工作中细心严谨，踏实肯干，有较强的责任心和进取心。并密切配合上级及同事圆满完成了公司安排的其他工作和任务。在工作上极具团队精神，注重团队合作。具备独立自主完成工作的能力。在技能素质上能不断学习新知识，新技能，注重自身发展，以确保胜任当前工作。</span>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="jieshao-center_center">
        <el-button round>查看更多</el-button>
      </div>
    </div>
    <!----------我的生活-------------->
    <div class="shenghuo-head">
      <div class="shenghuo">
        <div class="shenghuo-a">
          <div class="shenghuo-center">
            <div class="shenghuo_ch"></div>
            <h2 class="title4">文章分类</h2>
            <div class="shenghuo_en"></div>
          </div>
          <span class="title-d">Article</span>
        </div>
      </div>
      <div class="shenghuo-a-head">
        <div class="shenghuo-center-a">
          <div class="tuji">
            <div class="tuji-a">
              <el-radio-group v-model="radioButton" size="medium">
                <el-radio-button :label="true">Vue学习笔记</el-radio-button>
                <el-radio-button :label="false">JavaScript学习笔记</el-radio-button>
              </el-radio-group>
            </div>
            <div v-show="radioButton">
              <div class="shenghuo-center-zhong">
                <div v-for="(item,index) of shList" class="zhong-a">
                  <div class="zhong-a-head base">
                    <img :src="item.img">
                  </div>
                  <div class="zhong-a-bottom">
                    <span>{{item.jianjie}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="!radioButton">
              <div class="shenghuo-center-you">
                <div v-for="(item,index) of hsList" class="shenghuo-center-you">
                  <div class="zhong-b">
                    <div class="zhong-b-center base">
                      <img :src="item.img2">
                    </div>
                    <div class="zhong-a-bottom-a">
                      <span>{{item.jianjie2}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="shenghuo-center-xia">
            <el-button round>查看更多</el-button>
          </div>
        </div>

      </div>
    </div>
    <!----------新闻趣事--------------->
    <div class="xinwen">
      <div class="xinwen-head">
        <div class="xinwen-a">
          <div class="xinwen-center">
            <div class="xinwen_ch"></div>
            <h2 class="title5">最新文章</h2>
            <div class="xinwen_en"></div>
          </div>
          <span class="title-e">Newest</span>
        </div>
      </div>
      <div v-for="(item,index) of xwList" class="xinwen-center-shang">
        <div class="xinwen-shang-zuo">
          <img :src="item.xwImg">
        </div>
        <div class="xinwen-shang-you">
          <div class="xinwen-shang">
            <span>{{item.xwname}}</span>
          </div>
          <div class="xinwen-zhong">
            <span>{{item.xwtitle}}</span>
          </div>
          <div class="xinwen-xia">
            <el-button size="small" round>查看更多</el-button>
          </div>
        </div>
      </div>
      <div class="xinwen-bottom">
        <el-button round>查看更多</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        imglist: [
          "http://xlsb.luokangyuan.com/37.jpg",
          "http://xlsb.luokangyuan.com/34.jpg",
          "http://xlsb.luokangyuan.com/a5.jpg",
          "http://xlsb.luokangyuan.com/32.jpg"
        ],
        list: [{
          icon: 'iconfont icon-shumu1',
          name: '专业特长',
          title: 'Web前端',
          desc: '孜孜不倦，乐于学习'
        }, {
          icon: 'iconfont icon-shumu',
          name: '兴趣爱好',
          title: '篮球、跑步',
          desc: '强身健体，锻炼身体'
        }, {
          icon: 'iconfont icon-caomei',
          name: '课后学习',
          title: 'Pr、Ps',
          desc: '丰富自我，积极努力'
        }, {
          icon: 'iconfont icon-jurassic_heliuxiangdai',
          name: '目标方向',
          title: '前端工程师',
          desc: '制定目标，勇往直前'
        },],
        List: [{
          image: 'http://xlsb.luokangyuan.com/13.jpg',
          desc: '人生是美好的，又是短暂的。有的人生寂寞，有的人生多彩，不同的人有着不同的人生追求；人生是一条没有回程的单行线，每个人都用自己的所有时光前行。'
        }, {
          image: 'http://xlsb.luokangyuan.com/14.jpg',
          desc: '生活，就是面对现实微笑，就是越过障碍注视未来；生活，就是用心灵之剪，在人生之路上裁出叶绿的枝头；生活，就是面对困惑或黑暗时，灵魂深处燃起豆大却明亮且微笑的灯展。'
        }, {
          image: 'http://xlsb.luokangyuan.com/15.jpg',
          desc: '成熟是一种明亮而不刺眼的光辉，一种圆润而不腻耳的音响，一种不需要对别人察颜观色的从容，一种终于停止了向周围申诉求告的大气，一种不理会哄闹的微笑，一种洗刷了偏激的淡漠，一种无须声张的厚实，一种并不陡峭的高度。'
        }, {
          image: 'http://xlsb.luokangyuan.com/16.jpg',
          desc: '人生如一本书，应该多一些精彩的细节，少一些乏味的字眼；人生如一支歌，应该多一些昂扬的旋律，少一些忧伤的音符；人生如一幅画，应该多一些亮丽的色彩，少一些灰暗的色调。'
        },],
        radioButton: true,
        shList: [{
          img: 'http://xlsb.luokangyuan.com/7.jpg',
          jianjie: '读书破万卷，下笔如有神'
        }, {
          img: 'http://xlsb.luokangyuan.com/8.jpg',
          jianjie: '为政以德，譬如北辰，居其所而众星共之'
        }, {
          img: 'http://xlsb.luokangyuan.com/9.jpg',
          jianjie: '温故而知新，可以为师矣'
        },],
        hsList: [{
          img2: 'http://xlsb.luokangyuan.com/10.jpg',
          jianjie2: '君子周而不比，小人比而不周'
        }, {
          img2: 'http://xlsb.luokangyuan.com/a3.jpg',
          jianjie2: '学而不思则罔，思而不学则殆'
        }, {
          img2: 'http://xlsb.luokangyuan.com/a2.jpg',
          jianjie2: '攻乎异端，斯害也已'
        },],
        xwList:[{
          xwImg:'http://xlsb.luokangyuan.com/21.jpg',
          xwname:'如何提升企业网站价值，企业建站过程应该注意什么？',
          xwtitle:'互联网的发展，无论是企业或个人，都会选择通往互联网的捷径，以发展企业文化或推广产品概念。面对日益发达的互联网社会，大多数企业开始重视网站，并开始加大对网站搭建的投入，采用多渠道的网络推广形式来推广自己的品牌企业文化，以吸引更多的用户流量，促进流量的转换。'
        },{
          xwImg:'http://xlsb.luokangyuan.com/22.jpg',
          xwname:'如何提升企业网站价值，企业建站过程应该注意什么？',
          xwtitle:'互联网的发展，无论是企业或个人，都会选择通往互联网的捷径，以发展企业文化或推广产品概念。面对日益发达的互联网社会，大多数企业开始重视网站，并开始加大对网站搭建的投入，采用多渠道的网络推广形式来推广自己的品牌企业文化，以吸引更多的用户流量，促进流量的转换。'
        },{
          xwImg:'http://xlsb.luokangyuan.com/23.jpg',
          xwname:'如何提升企业网站价值，企业建站过程应该注意什么？',
          xwtitle:'互联网的发展，无论是企业或个人，都会选择通往互联网的捷径，以发展企业文化或推广产品概念。面对日益发达的互联网社会，大多数企业开始重视网站，并开始加大对网站搭建的投入，采用多渠道的网络推广形式来推广自己的品牌企业文化，以吸引更多的用户流量，促进流量的转换。'
        },]
      }
    }

  }
</script>

<style>
  @font-face {
    font-family: 'Alibaba-PuHuiTi-Regular';
    src: url('/static/font/Alibaba-PuHuiTi-Regular.otf') format('truetype');
  }

  .home {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .home-head {
    height: 600px;
    width: 100%;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    margin-top: 55px;
  }

  .home-head img {
    height: 600px;
    width: 100%;
  }

  .el-carousel__item img {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  /*.el-carousel__item:nth-child(2n) {*/
  /*    background-color: #99a9bf;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n+1) {*/
  /*    background-color: #d3dce6;*/
  /*}*/
  .home-center {
    height: 624px;
    width: 1300px;
    margin-top: 50px;
  }

  .center-head {
    height: 100px;
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .center-head-center {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title {
    font-size: 28px;
  }

  .title-a {
    color: #666;
  }

  .center-head_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .center-head_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }

  .center-center {
    height: 300px;
    width: 1300px;
    display: flex;
    flex-direction: row;
  }

  .center-center-zuo {
    height: 300px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center-center-zuo img {
    height: 250px;
    width: 450px;
  }

  .center-center-zuo:hover {
    cursor: pointer;
  }

  .center-center-zuo:hover img {
    transform: scale(1.1);
  }

  .center-center-zuo img {
    transition: all .5s;
  }

  .center-center-you {
    height: 300px;
    width: 800px;
    display: flex;
    flex-direction: column;

    justify-content: center;
  }

  .you-head {
    height: 150px;
    width: 800px;
  }

  .you-head span {
    font-size: 16px;
    font-family: 'Alibaba-PuHuiTi-Regular';
  }

  .you-center {
    height: 100px;
    width: 800px;
  }

  .you-center span {
    font-size: 16px;
    font-family: 'Alibaba-PuHuiTi-Regular';
  }

  .center-bottom {
    height: 60px;
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -36px;
  }

  .center-icon {
    height: 200px;
    width: 1300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
  }

  .icon-a {
    height: 200px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .icon-b i {
    font-size: 46px;
    color: #42b983;
  }

  .icon-c {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .icon-a:hover {
    /*animation: kapian 3s infinite;*/
    cursor: pointer;
  }

  .icon-c {
    font-size: 18px;
  }

  .icon-e {
    font-size: 14px;
  }

  .icon-f {
    font-size: 14px;
  }

  .home-center-a {
    height: 100%;
    width: 100%;
    background: #dadada;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .home-center-aa {
    height: 100px;
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

  .home-center-head {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title2 {
    font-size: 28px;
  }

  .title-b {
    color: #666;
    display: flex;
    justify-content: center;
  }

  .head-center_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .head-center_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }

  .center-zhongbu {
    height: 420px;
    width: 1300px;
    display: flex;
    justify-content: center;

  }
.center-xia{
  height: 80px;
  width: 944px;
  display: flex;
  align-items: center;
  justify-content: center;
}
  #content article {
    float: left;
    /*margin-right: 4%;*/
    max-width: 236px;
    position: relative;
    margin-bottom: 3.5%;
  }

  #content article:nth-child(4n+4) {
    margin-right: 0;
  }

  .post-format-content {
    position: relative;
    background: #999;
  }

  .post-thumbnail {
    max-width: 100%;
    height: auto;
    overflow: hidden;
  }

  .content-wrap {
    padding: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    top: 0;
    bottom: 0;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
  }

  .content-wrap p.entry-title {
    display: table;
    font-size: 14px;
    height: 100%;
    text-transform: uppercase;
    width: 100%;
    margin: 0;
  }

  .edit-link {
    z-index: 2;
  }

  .featured-image {
    display: table-cell;
    position: relative;
    transition: opacity .25s ease-in-out, background .25s ease-in-out;
    vertical-align: middle;
    z-index: 1;
    color: #fff;
    text-decoration: none;
    opacity: 0;
    padding: 10%;
  }

  .featured-image:hover {
    opacity: 0.9;
    color: #fff;
    background: rgba(119, 136, 153, 0.8);
  }

  .post-thumbnail img {
    display: block;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .post-thumbnail img {
    width: 320px;
    height: 420px;
  }

  .jieshao {
    height: 100px;
    width: 1300px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jieshao-a {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .title3 {
    font-size: 28px;
  }

  .title-c {
    color: #666;
    display: flex;
    justify-content: center;
  }

  .jieshao-a_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .jieshao-a_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }

  .jieshao-center {
    height: 800px;
    width: 944px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F5F7FA;
  }

  .jieshao-center_head {
    height: 400px;
    width: 944px;
    display: flex;
    flex-direction: row;
  }

  .jieshao_a {
    height: 400px;
    width: 472px;

  }

  .jieshao_a_head {
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .jieshao_a_head span {
    font-size: 22px;
  }

  .jieshao_a_xiahua {
    height: 1px;
    width: 80px;
    background: #666;
    margin-top: 10px;
  }

  .jieshao_a_center {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -70px;
  }

  .jieshao_a_center span {
    color: #666;
    margin-top: 15px;
  }

  .jieshao_a_bottom {
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .jieshao_bottom {
    height: 200px;
    width: 300px;
  }

  .jieshao_bottom {
    font-size: 14px;
  }

  .jieshao_b {
    height: 400px;
    width: 472px;
    overflow: hidden;
  }

  .jieshao-center_head:hover {
    cursor: pointer;
  }

  .jieshao_b img {
    width: 472px;
    height: 400px;
    transform: scale(1.0, 1.0);
    transition: transform 0.7s ease;
  }

  .jieshao_b img:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.7s ease;
  }

  .jieshao-center_center {
    height: 60px;
    margin-top: 30px;
  }

  .shenghuo-head {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .shenghuo {
    height: 100px;
    width: 1300px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shenghuo-center {
    display: flex;
    align-items: center;
  }

  .title4 {
    font-size: 28px;
  }

  .title-d {
    color: #666;
    display: flex;
    justify-content: center;
  }

  .shenghuo_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .shenghuo_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }

  .shenghuo-a-head {
    height: 500px;
    width: 1300px;
    display: flex;
    justify-content: center;
  }

  .shenghuo-center-a {
    height: 500px;
    width: 944px;
  }

  .shenghuo-center-shang {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .shenghuo-center-zhong {
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .zhong-a {
    height: 240px;
    width: 300px;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  }
  .zhong-a:hover{
    cursor: pointer;
  }

  .zhong-a-head {
    height: 190px;
  }

  .zhong-a-head img {
    height: 190px;
    width: 300px;
  }

  .zhong-a-bottom {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zhong-a-bottom span {
    font-size: 14px;
  }

  .shenghuo-center-you {
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .zhong-b {
    height: 240px;
    width: 300px;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  }

  .zhong-b-center {
    height: 190px;
  }

  .zhong-b-center img {
    width: 300px;
  }

  .zhong-b-center img {
    height: 190px;
  }

  .zhong-a-bottom-a {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zhong-a-bottom-a span {
    font-size: 14px;
  }

  .tuji-a {
    height: 60px;
    width: 944px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .base {
    overflow: hidden;

  }

  .base img {
    height: 190px;
    width: 300px;
    transform: scale(1.0, 1.0);
    -ms-transform: scale(1.0, 1.0);
    -moz-transform: scale(1.0, 1.0);
    -webkit-transform: scale(1.0, 1.0);
    -o-transform: scale(1.0, 1.0);
    -webkit-transition: transform 0.7s ease;
    transition: transform 0.7s ease;
  }

  .base img:hover {
    transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -webkit-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    -webkit-transition: transform 0.7s ease;
    transition: transform 0.7s ease;
  }

  .shenghuo-center-xia {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .xinwen{
    height: 1000px;
    width: 100%;
    background: #dadada;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .xinwen-head{
    height: 100px;
    width: 1300px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
.xinwen-center{
  display: flex;
  align-items: center;
}
  .title5 {
    font-size: 28px;
  }

  .title-e {
    color: #666;
    display: flex;
    justify-content: center;
  }

  .xinwen_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .xinwen_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }
  .xinwen-center-shang{
    height: 210px;
    width: 944px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
  }
  .xinwen-center-shang:hover{
    cursor: pointer;
  }
  .xinwen-shang-zuo{
    height: 180px;
    width: 310px;
    overflow: hidden;
  }
  .xinwen-shang-zuo img:hover{
    transform: scale(1.1,1.1);
    transition: transform 0.7s ease;
  }
  .xinwen-shang-zuo img{
    height: 180px;
    width: 310px;
    transform: scale(1.0, 1.0);
    transition: transform 0.7s ease;
  }
  .xinwen-shang-you{
    height: 180px;
    width: 574px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }
  .xinwen-shang{
    height: 40px;
    width: 574px;
  }
  .xinwen-shang span{
    font-size: 16px;
  }
  .xinwen-zhong{
    height: 80px;
    width: 574px;
  }
  .xinwen-zhong span{
    font-size: 10px;
    color: #666;
  }
  .xinwen-xia{
    height: 60px;
    width: 574px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .xinwen-bottom{
    width: 944px;
    height: 50px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
