<template>
  <div class="fd-center-box">
    <div class="fd-tourism">
      <div v-for="(a,index) of list" :class="sccolor(index)"   class="fd-item ">
        <div class="fd-image">
          <div class="item1">
            <i :class="a.itm1" class=" tubiao"></i>
          </div>

        </div>
        <div class="fd-wenzi">
          <span class="title">{{a.title}}（{{a.num}}篇）</span>
          <span class="desc">{{a.desc}}</span>
        </div>
      </div>
    </div>
    <div class="fd-lunbo">
      <el-carousel :interval="4000" type="card" height="310px">
        <el-carousel-item v-for="(item, index) of imglist">
          <img class="medium" :src="item"></img>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="fd-wenzhang">
      <el-tabs type="border-card">
        <el-tab-pane label="Vue学习笔记">
          <div class="wenzhang">
            <el-card v-for="(item,index) of photolist" :body-style="{ padding: '0px' }">
              <img :src="item.image" class="image">
              <div style="padding: 14px;">
                <span class="wenzi">{{item.wenzi}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">{{item.button}}</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Html学习笔记">
          <div class="wenzhang">
            <el-card v-for="(item,index) of LRlist"  :body-style="{ padding: '0px' }">
              <img :src="item.image" class="image">
              <div style="padding: 14px;">
                <span class="Wenzi">{{item.Wenzi}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="Button">{{item.Button}}</el-button>
                </div>
              </div>
            </el-card>



          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="fd-dibu">
      <el-calendar v-model="value">
      </el-calendar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: [{
       itm1:"el-icon-reading ",
       title: "文章总数",
        num: 34,
        desc: 'Stick to the end, there is always a harvest'
      },{
        itm1:"el-icon-message-solid ",
        title: "标签总数",
        num: 34,
        desc: 'Stick to the end, there is always a harvest'
      },{
        itm1:"el-icon-s-cooperation ",
        title: "标签总数",
        num: 34,
        desc: 'Stick to the end, there is always a harvest'
      },{
        itm1:"el-icon-s-promotion ",
        title: "标签总数",
        num: 34,
        desc: 'Stick to the end, there is always a harvest'
      },{
        itm1:"el-icon-s-flag ",
        title: "标签总数",
        num: 34,
        desc: 'Stick to the end, there is always a harvest'
      }],
      imglist:[
        "/static/image/card1.jpg",
        "/static/image/card2.jpg",
        "/static/image/card3.jpg",
        "/static/image/vue.jpg"],
      photolist:[{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card1.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        wenzi:"Vue学习",
        button:'操作按钮'
      },],
      LRlist:[{
        image:"/static/image/card2.jpg",
        Wenzi:"好吃的汉堡",
        Button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        Wenzi:"好吃的汉堡",
        Button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        Wenzi:"好吃的汉堡",
        Button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        Wenzi:"好吃的汉堡",
        Button:'操作按钮'
      },{
        image:"/static/image/card2.jpg",
        Wenzi:"好吃的汉堡",
        Button:'操作按钮'
      },]
    }
  },
  methods: {
    sccolor(index) {
      return "color" + (index + 1);
    }
  }
}
</script>

<style>
.fd-center-box {
  width: 1600px;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100px;
  overflow: hidden;
}

.fd-tourism {
  margin-top: 80px;
  height: 161px;
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}

.fd-item {
  width: 310px;
  height: 116px;
  margin-top: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fad0c4;
  border-radius: 5px;

}

.color1 {
  background: #17223b;
}

.color2 {
  background: #263859;
}

.color3 {
  background: #6b778d;
}

.color4 {
  background: #ff6768;
}

.color5 {
  background: #ff585d;
}

.item1 {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 40px;
  /*background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);*/
}

.fd-image {
  height: 100%;
  width: 99px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.fd-img {
  width: 80px;
  height: 80px;
}

.fd-wenzi {
  display: flex;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin-left: 5px;
  flex-direction: column;
}

.title {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
}

.desc {
  font-size: 15px;
  color: #d7e2e2;
  margin-top: 5px;
}

.fd-lunbo {
  height: 333px;
  width: 100%;
}

.fd-wenzhang {
  height: 778px;
  width: 100%;
  z-index: -10;
}

.fd-dibu {
  width: 100%;
  background: blueviolet;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.medium {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.el-tabs__content {
  height: 310px;
  overflow: auto;
}

.wenzhang {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

}

.el-card {
  margin-bottom: 10px;
  width: 343px;
}

.image {
  width: 100%;
  height: 239px;
  object-fit: fill;
}

.el-tabs__content {
  height: 688px;
}

.tubiao {
  font-size: 58px;
  color: #fff;
}
</style>
