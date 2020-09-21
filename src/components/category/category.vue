<template>
  <div class="category">
    <div class="shijianzhou">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="head">
      <div class="head-head">
        <div class="head-a">
          <div class="head-center">
            <div class="head_ch"></div>
            <h2 class="title">时间轴</h2>
            <div class="head_en"></div>
          </div>
          <span class="title-a">Timer shaft</span>
        </div>
      </div>
      <div class="head-zhong">
        <el-timeline v-for="(item,index) of list" class="head-shang">
          <el-timeline-item :timestamp="item.time" placement="top">
            <div class="head-xia"></div>
            <el-card>
              <h4>{{item.desc}}</h4>
              <p>{{item.name}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "category",
    data() {
      return {
        list:[
          {
          time:'2020/09/22',
          desc:'再过两天就要开始新的旅途了，去新的城市，迎接新的挑战',
          name:'李松直 提交于 2020/09/22',
        },
          {
          time:'2020/09/18',
          desc:'成功的道路从来都不是那么容易的，有人悲，有人喜，加油吧！趁我们还年轻',
          name:'李松直 提交于 2020/09/18',
        },
          {
          time:'2020/09/14',
          desc:'书中自有黄金屋，养成良好的读书习惯，也磨练着你的耐心',
          name:'李松直 提交于 2020/09/14',
        },
          {
          time:'2020/09/12',
          desc:'做自己就好，不必在乎别人的眼光',
          name:'李松直 提交于 2020/09/12',
        },
          {
          time:'2020/08/12',
          desc:'经过一段时间的写代码，自己的努力也等到了回报',
          name:'李松直 提交于 2020/08/12',
        },{
          time:'2018/08/02',
          desc:'第一次接触GitHub，创建了属于自己的GitHub账号',
          name:'李松直 提交于 2020/07/02',
        },{
          time:'2018/4/12',
          desc:'刚开始接触idea，发现自己进去什么都不会，连英语也看不懂是什么意思',
          name:'李松直 提交于 2020/04/12',
        },]
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

  .shijianzhou {
    height: 400px;
    width: 100%;
    background: #a8edea;
  }

  .shijianzhou img {
    height: 400px;
    width: 100%;
  }

  .head {
    width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .head-head {
    height: 100px;
    width: 1300px;
    margin-top: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .head-center {
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

  .head_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .head_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }

  .head-zhong {
    width: 1300px;
    height: 1100px;
  }
h4{
  height: 50px;
  width: 1300px;
  color: brown;
  font-size: 20px;
}
.head-shang:hover{
  cursor: pointer;
}
  .head-xia{
    position: absolute;
    left: 4px;
    height: 156px;
    border-left: 2px solid #E4E7ED;
    top:5px
  }
</style>
