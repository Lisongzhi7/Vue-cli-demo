<template>
<div class="lianjie-box">
  <div class="toubu-box">

  </div>
  <div class="fd-kapian">
    <div class="fd-kapian-box">
      <div v-for="(item, index) of list" :class="generateClassName(index)" class="base">
        <div class="dingbu">
          <div class="zhaopian">
            <img class="tupian" :src="item.img">
          </div>
          <div class="jieshao">
            <span class="biaoqian">{{item.name}}</span>
            <span class="neirong-box">{{item.desc}}</span>
          </div>
        </div>
        <div class="fd-button">
          <el-button type="danger" round>前去学习</el-button>
        </div>
      </div>




    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Lianjie",
  data () {
    return {
      list: [{
        img: "/static/image/card1.jpg",
        name: "码酱",
        desc: '不忘初心，方得始终!敢于磨练，坚持不懈!',
        url: "http://luokangyuan.com/"
      },{
        img: "/static/image/card2.jpg",
        name: "码酱2",
        desc: '不忘初心，方得始终!敢于磨练，坚持不懈2',
        url: "http://luokangyuan.com/"
      },{
          img: "/static/image/card3.jpg",
          name: "码酱3",
          desc: '不忘初心，方得始终!敢于磨练，坚持不懈3',
          url: "http://luokangyuan.com/"
        },{
        img: "/static/image/card4.jpg",
        name: "码酱4",
        desc: '不忘初心，方得始终!敢于磨练，坚持不懈4',
        url: "http://luokangyuan.com/"
      },{
        img: "/static/image/card1.jpg",
        name: "码酱",
        desc: '不忘初心，方得始终!敢于磨练，坚持不懈!',
        url: "http://luokangyuan.com/"
      },{
        img: "/static/image/card2.jpg",
        name: "码酱2",
        desc: '不忘初心，方得始终!敢于磨练，坚持不懈2',
        url: "http://luokangyuan.com/"
      },{
        img: "/static/image/card3.jpg",
        name: "码酱3",
        desc: '不忘初心，方得始终!敢于磨练，坚持不懈3',
        url: "http://luokangyuan.com/"
      },{
        img: "/static/image/card4.jpg",
        name: "码酱4",
        desc: '不忘初心，方得始终!敢于磨练，坚持不懈4',
        url: "http://luokangyuan.com/"
      },
        {
          img: "/static/image/card4.jpg",
          name: "码酱4",
          desc: '不忘初心，方得始终!敢于磨练，坚持不懈4',
          url: "http://luokangyuan.com/"
        }
      ]}
  },
  methods: {
    generateClassName (index) {
      return `fd-kapian${index + 1}`;
    },
    initList() {
      // 请求后台拿到文章列表
      // let list = [];
      this.list = list;
    }
  },
  mounted() {
    this.initList();
  }
}
</script>

<style scoped>
.lianjie-box{
  margin-top: 80px;
  display: flex;
  height: 100%;
  width: 100%;
  /*justify-content: center;*/
  /*align-content: center;*/
  flex-direction: column;

}
.dingbu{
  display: flex;
  justify-content: center;
  align-items: center;


}
.toubu-box{
  height: 200px;
  width: 100%;
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
  margin-top: 20px;
}
.fd-kapian{
  width: 100%;
  height: 1000px;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: -60px;
}
.fd-kapian-box{
  width: 1000px;
  height: 800px;

  margin-top: -50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
}
.fd-kapian1{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);


}
.zhaopian{
  height: 170px;
  width: 130px;
  /*background: #d7e2e2;*/
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.tupian{
  height:110px;
  width: 110px;

  border-radius: 55px;
}
.jieshao{
  height: 170px;
  width: 160px;
  /*background: #fad0c4;*/
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
}
.biaoqian{
font-size: 35px;
  color: #fff;
margin-bottom: 10px;
 font-weight: bold;
}
.neirong-box{
  font-size: 15px;
  color: #fff;
}
.base{
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  border-radius: 10px;
}
.fd-button{
  display: flex;
  justify-content: center;
  margin-top: -20px;
}
.fd-kapian2{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);


}
.fd-kapian3{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);

}
.fd-kapian4{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);

}
.fd-kapian5{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);

}
.fd-kapian6{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);

}
.fd-kapian7{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);

}
.fd-kapian8{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);

}
.fd-kapian9{
  height: 170px;
  width: 300px;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);

}

</style>
