<template>
  <div class="lianjie">
    <div class="lianjie-head">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="sysy">
      <div class="sysy-head">
        <div class="sysy-a">
          <div class="sysy-center">
            <div class="sysy_ch"></div>
            <h2 class="title">碎言碎语</h2>
            <div class="sysy_en"></div>
          </div>
          <span class="title-a">Record</span>
        </div>
      </div>
      <div class="sysy-bottom">
        <div v-for="(item,index) of list" class="bottom-a" :class="xzColor(index)">
          <div class="bottom-aa">
            <div class="bottom-aa-shang">
              <span>{{item.time}}</span>
            </div>
            <div class="bottom-aa-zhong">
              <span>{{item.desc}}</span>
            </div>
            <div class="bottom-aa-xia">
              <img :src="item.image"/>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Lianjie",
    data(){
      return{
        list:[{
          time:'2020-07-02',
          desc:'刚开始的接触，我发现我对这些都不熟悉，不熟悉到看不懂的程度，慢慢的发现自己真的要学的东西实在太多了。',
          image:'http://xlsb.luokangyuan.com/tubiao1.png'
        },{
          time:'2020-07-11',
          desc:'学校生活总想着怎么玩才玩的开心，根本没有想过学习，当你出入社会的时候你才发现，掌握好知识是多么重要。',
          image:'http://xlsb.luokangyuan.com/tubiao2.png'
        },{
          time:'2020-07-22',
          desc:'每一天都重复一件事情，是什么样的体验，当你做不下去的时候，你首先想到的是什么？',
          image:'http://xlsb.luokangyuan.com/tubiao3.png'
        },{
          time:'2020-08-02',
          desc:'学习不在一时，而是长时间的积累，把所学的知识都记在自己的脑海里面，温故而知新',
          image:'http://xlsb.luokangyuan.com/tubiao4.png'
        },{
          time:'2020-08-02',
          desc:'这一天，我萌生了想要放弃的打算，就感觉自己学的不是很好，也不是很能理解到其中的含义',
          image:'http://xlsb.luokangyuan.com/tubiao5.png'
        },{
          time:'2020-08-02',
          desc:'经过一晚上的思考，第二天早上起床，还是义无反顾地打开了电脑，点击了编程软件，继续没有完成的代码',
          image:'http://xlsb.luokangyuan.com/tubiao6.png'
        },{
          time:'2020-08-02',
          desc:'如果你问我为什么还要坚持这个，学也学不会，我想了想，为什么呢，因为以后吧......',
          image:'http://xlsb.luokangyuan.com/tubiao1.png'
        },{
          time:'2020-08-02',
          desc:'接下来的时间当中，我就没有再想过放弃了，毕竟做一行爱一行，坚持做好一件事情，你会发现会有很好的收获的',
          image:'http://xlsb.luokangyuan.com/tubiao2.png'
        },]
      }
    },
    methods:{
      xzColor(index){
        return `tubiaoColor${index +1}`
      }
    }


  }

</script>

<style scoped>
  @font-face {
    font-family: 'Alibaba-PuHuiTi-Light';
    src: url('/static/font/Alibaba-PuHuiTi-Light.otf') format('truetype');
  }
  .lianjie {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f5f5f5;
  }

  .lianjie-head {
    height: 400px;
    width: 100%;
  }

  .lianjie-head img {
    height: 400px;
    width: 100%;
  }
.sysy{
  height: 900px;
  width: 1300px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
  .sysy-head{
    height: 100px;
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sysy-center {
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

  .sysy_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .sysy_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }

  .sysy-bottom{
    height: 800px;
    width: 1300px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .bottom-a{
    height: 280px;
    width: 280px;
    background: #fff;
    transform:rotate(-8deg);
    /*margin-left: 70px;*/
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    box-shadow: rgba(0,0,0,.1) 3px 5px 5px;
    border-radius: 5px;
  }
  .bottom-aa{
    height: 240px;
    width: 240px;
    display: flex;
    flex-direction: column;
  }
  .bottom-a:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: .2s;
    box-shadow: rgba(0,0,0,.5) 3px 5px 5px;
  }
  .bottom-aa-shang{
    height: 30px;
    width: 240px;
    color: #999;
    font-size: 18px;
  }
  .bottom-aa-zhong{
    height: 140px;
    width: 240px;
    font-size: 19px;
    font-family: Alibaba-PuHuiTi-Light;
  }
  .bottom-aa-xia{
    height: 70px;
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 10px;
  }
  .bottom-aa-xia img{
    height: 40px;
    width: 40px;
  }
  .tubiaoColor2{
    transform:rotate(8deg);
    background: rgb(210,251,253);
    margin-top: 40px;
  }
  .tubiaoColor3{
    transform:rotate(-5deg);
    background: rgb(255,255,205);
  }
  .tubiaoColor4{
    transform:rotate(8deg);
    background: rgb(254,201,227);
    margin-top: 35px;
  }
  .tubiaoColor5{
    transform:rotate(-8deg);
    background: rgb(255,255,205);
    margin-top: -25px;
  }
  .tubiaoColor6{
    transform:rotate(8deg);
    background: rgb(254,201,227);
    margin-top: -25px;
  }
  .tubiaoColor7{
    transform:rotate(-8deg);
    background: rgb(210,251,253);
    margin-top: -25px;
  }
  .tubiaoColor8{
    transform:rotate(8deg);
    background: rgb(255,255,205);
    margin-top: -25px;
  }

</style>
