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
      <div class="jieshao">
        <div class="jieshao-head">
          <div class="jieshao-a">
            <div class="jieshao-a_ch"></div>
            <h2 class="title3">介绍</h2>
            <div class="jieshao-a_en"></div>
          </div>
          <span class="title-c">Introduce</span>
        </div>
      </div>
      <div class="jieshao-center">
        <div class="jieshao-center_head">
          <div class="jieshao_a">
            <div class="jieshao_a_head">
              <span>个人自我介绍</span>
              <div class="jieshao_a_xiahua"></div>
            </div>
            <div class="jieshao_a_center">
              <span>热爱学习</span>
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
              <span>个人自我介绍</span>
              <div class="jieshao_a_xiahua"></div>
            </div>
            <div class="jieshao_a_center">
              <span>热爱学习</span>
            </div>
            <div class="jieshao_a_bottom">
              <div class="jieshao_bottom">
                <span>1、本人开朗大方，勤奋上进;富有感染力，表达能力与沟通能力强，善于学习和接受新事物;追求和谐，有团队合作精神。2、工作认真负责，有较强的敬业精神和责任心;专业知识扎实，能熟练运用预算软件、资料软件、办公软件;具有良好的施工现场管理经验及勾通协调能力。为人诚恳、工作敬业、吃苦耐劳、实战肯干型，付有超强团队合作精神。表达能力适应能力强逻辑思维清晰.</span>
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
          <h2 class="title4">我的生活</h2>
          <div class="shenghuo_en"></div>
        </div>
        <span class="title-d">Excerpt</span>
      </div>
    </div>
      <div class="shenghuo-a-head">
        <div class="shenghuo-center-a">
          <div class="shenghuo-center-shang">
            <el-button type="primary" round>家居行业</el-button>
            <el-button type="success" round>教育行业</el-button>
            <el-button type="info" round>机械行业</el-button>
            <el-button type="warning" round>餐饮行业</el-button>
          </div>


          <div class="shenghuo-center-zhong">
            <div v-for="(item,index) of shList" class="zhong-a">
              <div class="zhong-a-head">
                <img :src="item.img">
              </div>
              <div class="zhong-a-bottom">
                <span>{{item.jianjie}}</span>
              </div>
            </div>
          </div>
          <div class="shenghuo-center-xia">
            <el-button round>查看更多</el-button>
          </div>
        </div>

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
          "http://xlsb.luokangyuan.com/a5.jpg",
          "http://xlsb.luokangyuan.com/8.jpg",
          "http://xlsb.luokangyuan.com/a3.jpg",
          "http://xlsb.luokangyuan.com/11.jpg"
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
        shList:[{
          img:'http://xlsb.luokangyuan.com/18.jpg',
          jianjie:'青于蓝企业网站模板'
        },{
          img:'http://xlsb.luokangyuan.com/18.jpg',
          jianjie:'青于蓝企业网站模板'
        },{
          img:'http://xlsb.luokangyuan.com/18.jpg',
          jianjie:'青于蓝企业网站模板'
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
    margin-top: 90px;
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

  .center-center-zuo:hover img{
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
    -moz-transition: opacity .25s ease-in-out, background .25s ease-in-out;
    -webkit-transition: opacity .25s ease-in-out, background .25s ease-in-out;
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
    -ms-transform: scale(1.0, 1.0);
    -moz-transform: scale(1.0, 1.0);
    -webkit-transform: scale(1.0, 1.0);
    -o-transform: scale(1.0, 1.0);
    -webkit-transition: transform 0.7s ease;
    transition: transform 0.7s ease;
  }
  .jieshao_b img:hover{
    transform: scale(1.05,1.05);
    -ms-transform:scale(1.05,1.05);
    -webkit-transform:scale(1.05,1.05);
    -o-transform:scale(1.05,1.05);
    -webkit-transition: transform 0.7s ease;
    transition: transform 0.7s ease;
  }
  .jieshao-center_center{
    height: 60px;
    margin-top: 30px;
  }
  .shenghuo-head{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .shenghuo{
    height: 100px;
    width: 1300px;
    margin-top: 50px;
    background: #3a8ee6;
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
  .shenghuo-a-head{
    height: 500px;
    width: 1300px;
    background: #6b778d;
    display: flex;
    justify-content: center;
  }
  .shenghuo-center-a{
    height: 500px;
    width: 944px;
    background: #8cc5ff;
  }
  .shenghuo-center-shang{
    height: 120px;
    background: #5daf34;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .shenghuo-center-zhong{
    height: 260px;
    background: #a8edea;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .zhong-a{
    height: 240px;
    width: 300px;
    background: #9a6e3a;
  }
  .zhong-a-head{
    height: 190px;
    background: #0077aa;
  }
  .zhong-a-head img{
    height: 190px;
  }
.zhong-a-bottom{
  height: 50px;
  background: #5daf34;
  display: flex;
  align-items: center;
  justify-content: center;
}
.zhong-a-bottom span{
  font-size: 14px;
}


  .shenghuo-center-xia{
    height: 120px;
    background: #0077aa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
