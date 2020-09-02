<template>
  <div class="head">
    <div class="head-dingbu"></div>
    <div class="head-zhongbu">
      <div class="fd-biaoqian">
        <span>文章标签</span>
      </div>
      <div class="fd-fubiao">
        <div v-for="(item,index) of list" :style="{background:randoColor()}" :class="createClasee(index)" class="base">{{item.name}}</div>
      </div>
    </div>
    <div class="fd-time">
    </div>
  </div>
</template>

<script>
export default {
  name: "Guidang",
data(){
    return{
      list:[{
        name : "Jave (21)"
      },{
        name : "Web (6)"
      },{
        name : "Apache (3)"
      },{
        name : "设计模式 (1)"
      },{
        name : "日常总结 (4)"
      },{
        name : "并发 (2)"
      },{
        name : "JaveScript (7)"
      },{
        name : "Mybatis (4)"
      },{
        name : "MapUtils (2)"
      },{
        name : "ElasticSearch (5)"
      },{
        name : "多线程 (6)"
      },{
        name : "大数据 (3)"
      },{
        name : "ES6 (1)"
      },{
        name : "Vue (4)"
      },{
        name : "CSS3 (6)"
      },{
        name : "CSS2 (7)"
      },{
        name : "Html (14)"
      },{
        name : "MyBatisPlus (12)"
      },{
        name : "SpringCloud (5)"
      },{
        name : "StringUtils (6)"
      },{
        name : "ArrayUtils (3)"
      },{
        name : "CollectionUtils (14)"
      },{
        name : "MultiSet (12)"
      },{
        name : "DateUtils (11)"
      },{
        name : "HashMap (7) (11)"
      },{
        name : "jdk源代码 (1)"
      },{
        name : "程序 (1)"
      },{
        name : "开发工具 (13)"
      }]
    }
},
  methods: {
    createClasee(index) {
      return "fd-jave" + (index + 1);
    },
    randoColor() {
      var r = Math.floor(Math.random()*256);
      var g = Math.floor(Math.random()*256);
      var b = Math.floor(Math.random()*256);
      var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
      return color;

    }
  },
  mounted() {
    console.log(this.randoColor());
  }

}
</script>

<style scoped>
.head {
  margin-top: 100px;
  height: 1600px;
  width: 100%;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.head-dingbu {
  height: 200px;
  width: 100%;
  background: #2e3032;
}
.head-zhongbu {
  height: 600px;
  width: 1000px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.fd-biaoqian {
  height: 80px;
  width: 1000px;
  background: #ebedee;
  font-size: 30px;
  color: #2e3032;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.fd-fubiao {
  height: 270px;
  width: 1000px;
  background:#ebedee;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  color: #ffffff;
  font-weight: bold;
  font-family: 华文细黑;
  margin-top: 15px;
  border-radius: 5px;
}
.base{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888;
  padding: 10px 10px;
}
.fd-time{
  height: 100%;
  width: 800px;
  margin-top: -20px;
  border-radius: 5px;
  background: #a8edea;
}
</style>
