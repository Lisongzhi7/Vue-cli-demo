<template>
<div class="famousAphorism">
  <div class="head">
    <img src="http://xlsb.luokangyuan.com/30.jpg"/>
  </div>
  <div class="center">
    <div data-aos="fade-up"
         data-aos-duration="3000" v-for="(item,index) of list" class="center-myjj">
      <div class="myjj-zuo">
        <div class="zuo-img">
          <img :src="item.img"/>
        </div>
      </div>
      <div class="myjj-you">
        <div class="you-shang">
          <span>{{item.desc}}</span>
        </div>
        <div class="you-xia">
          <img src="http://xlsb.luokangyuan.com/shuji1.png"/>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "FamousAphorism",
      data(){
          return{
            list:[{
              img:'http://xlsb.luokangyuan.com/xiaowangzi.jpg',
              desc:'“你们很美，但你们是空虚的。”小王子仍然在对她们说，“没有人能为你们去死。\n' +
                ' 当然啰，我的那朵玫瑰花，一个普通的过路人以为她和你们一样。可是，\n' +
                ' 她单独一朵就比你们全体更重要，因为她是我浇灌的。因为她是我放在花罩中的。\n' +
                ' 因为她是我用屏风保护起来的。因为她身上的毛虫(除了留下两三只为了变蝴蝶而外)是我除灭的。\n' +
                ' 因为我倾听过她的怨艾和自诩，甚至有时我聆听着她的沉默。因为她是我的玫瑰。”',
            },{
              img:'http://xlsb.luokangyuan.com/dssd.jpg',
              desc:'"因为从心底害怕自己不值得被爱，我们独来独往，然而就是因为独来独往，才让我们以为自己不值得被爱。' +
                '有一天，你不知道是什么时候，你会驱车上路。有一天，你不知道是什么时候，你会遇到他(她)。你会被爱，' +
                '因为你今生第一次真正不再孤单。你会选择不再孤单下去。"',
            },{
              img:'http://xlsb.luokangyuan.com/zhuifengzhengderen.jpg',
              desc:'"每个人的命运都像风筝一样，它往更高更远的天空，但却受着那根细细丝线的牵引而无法摆脱。' +
                '但也正因有这根丝线的牵引，它才不至于消失在天际或跌落尘埃，而是在空中划出优美的人生轨迹。' +
                '当这根丝线被割断，就要鼓起勇气去追寻那飘落在远方的风筝，这样才能获得内心的安宁。——《追风筝的人》"',
            },]
          }
      }
    }
</script>

<style scoped>
.famousAphorism{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
}
  .head{
    height: 400px;
    width: 100%;
  }
  .head img{
    height: 400px;
    width: 100%;
  }
  .center{
    height: 100%;
    width: 1300px;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .center-myjj{
    height: 300px;
    width: 600px;
    margin-top: 80px;
    background: #fff;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .myjj-zuo{
    height: 300px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .zuo-img{
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .zuo-img img{
    height: 250px;
    width: 190px;
    transform: scale(1.0, 1.0);
    transition: transform 0.7s ease;
  }
  .zuo-img img:hover{
    transform: scale(1.1,1.1);
    transition: transform 0.7s ease;
  }
  .myjj-you{
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
.you-shang{
  height: 200px;
  width: 380px;
  font-size: 14px;
}
  .you-xia{
    height: 80px;
    width: 380px;
    display: flex;
    justify-content: flex-end;
  }
  .you-xia img{
    height: 50px;
    width: 50px;
    margin-right: 30px;
  }
</style>
