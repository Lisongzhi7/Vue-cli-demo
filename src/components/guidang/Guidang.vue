<template>
  <div class="guidang">

    <!--<span> 累计发布服务：268个</span>-->
    <span>
        <el-radio-group v-model="radioButton" size="medium" >
            <el-radio-button :label="true" >累计</el-radio-button>
            <el-radio-button :label="false">今日</el-radio-button>
        </el-radio-group>
    </span>
    <div v-show="radioButton">
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
    </div>
    <div v-show="!radioButton">
      <div class="shenghuo-center-you">
      <div v-for="(item,index) of hsList" class="shenghuo-center-you">
        <div class="zhong-b">
          <div class="zhong-b-center">
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
</template>

<script>
export default {
  name: "Guidang",
  data() {
    return {
      radioButton:true,
      shList:[{
        img:'http://xlsb.luokangyuan.com/18.jpg',
        jianjie:'青于蓝企业网站模板'
      },{
        img:'http://xlsb.luokangyuan.com/18.jpg',
        jianjie:'青于蓝企业网站模板'
      },{
        img:'http://xlsb.luokangyuan.com/18.jpg',
        jianjie:'青于蓝企业网站模板'
      },],
      hsList:[{
        img2:'http://xlsb.luokangyuan.com/17.jpg',
        jianjie2:'天高任鸟飞'
      },{
        img2:'http://xlsb.luokangyuan.com/17.jpg',
        jianjie2:'天高任鸟飞'
      },{
        img2:'http://xlsb.luokangyuan.com/17.jpg',
        jianjie2:'天高任鸟飞'
      },]
    }
}
}

</script>

<style scoped>
  .guidang{
    height: 600px;
    width: 1000px;
    background: #a8edea;
    margin-top: 90px;
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
    width: 304px;
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

  .shenghuo-center-you{
    height: 260px;
    background: #a8edea;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .zhong-b{
    height: 240px;
    width: 304px;
    background: #9a6e3a;
  }
  .zhong-b-center{
    height: 190px;
    background: #0077aa;
  }
  .zhong-b-center img{
    width: 304px;
  }
  .zhong-b-center img{
    height: 190px;
  }
  .zhong-a-bottom-a{
    height: 50px;
    background: #5daf34;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .zhong-a-bottom-a span{
    font-size: 14px;
  }
</style>
