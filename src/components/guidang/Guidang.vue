<template>
  <div class="head">
    <div class="head-dingbu"></div>
    <div class="head-zhongbu">
      <div class="fd-biaoqian">
        <span>文章标签</span>
      </div>
      <div class="fd-fubiao">

        <div v-for="(item,index) of list" class="fd-jave">{{item.name}}</div>
        <div class="fd-jave1">Web (6)</div>
        <div class="fd-jave2">Apache (3)</div>
        <div class="fd-jave3">设计模式 (1)</div>
        <div class="fd-jave4">日常总结 (4)</div>
        <div class="fd-jave5">并发 (2)</div>
        <div class="fd-jave6">JaveScript (7)</div>
        <div class="fd-jave7">Mybatis (4)</div>
        <div class="fd-jave8">MapUtils (2)</div>
        <div class="fd-jave9">Guava (3)</div>
        <div class="fd-jave10">ElasticSearch (5)</div>
        <div class="fd-jave11">多线程 (6)</div>
        <div class="fd-jave12">大数据 (3)</div>
        <div class="fd-jave13">ES6 (1)</div>
        <div class="fd-jave14">Vue (4)</div>
        <div class="fd-jave15">CSS3 (6)</div>
        <div class="fd-jave16">CSS2 (7)</div>
        <div class="fd-jave17">Html (14)</div>
        <div class="fd-jave18">MyBatisPlus (12)</div>
        <div class="fd-jave19">SpringCloud (5)</div>
        <div class="fd-jave20">Jave8 (9)</div>
        <div class="fd-jave21">StringUtils (6)</div>
        <div class="fd-jave22">ArrayUtils (3)</div>
        <div class="fd-jave23">DateUtils (11)</div>
        <div class="fd-jave24">CollectionUtils (14)</div>
        <div class="fd-jave25">MultiSet (12)</div>
        <div class="fd-jave26">HashMap (7)</div>
        <div class="fd-jave27">jdk源代码 (1)</div>
        <div class="fd-jave28">程序 (1)</div>
        <div class="fd-jave29">开发工具 (13)</div>
      </div>
    </div>
    <div class="fd-time">
      <el-timeline-item timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "Guidang",
// data(){
//     return{
//       list:[{
//         name : "Jave (21)"
//       },{
//         name : "Web (6)"
//       },{
//         name : "Apache (3)"
//       },{
//         name : "设计模式 (1)"
//       },{
//         name : "日常总结 (4)"
//       },{
//         name : "并发 (2)"
//       },{
//         name : "JaveScript (7)"
//       },{
//         name : "Mybatis (4)"
//       },{
//         name : "MapUtils (2)"
//       },{
//         name : "ElasticSearch (5)"
//       },{
//         name : "多线程 (6)"
//       },{
//         name : "大数据 (3)"
//       },{
//         name : "ES6 (1)"
//       },{
//         name : "Vue (4)"
//       },{
//         name : "CSS3 (6)"
//       },{
//         name : "CSS2 (7)"
//       },{
//         name : "Html (14)"
//       },{
//         name : "MyBatisPlus (12)"
//       },{
//         name : "SpringCloud (5)"
//       },{
//         name : "StringUtils (6)"
//       },{
//         name : "ArrayUtils (3)"
//       },{
//         name : "CollectionUtils (14)"
//       },{
//         name : "MultiSet (12)"
//       },{
//         name : "DateUtils (11)"
//       },{
//         name : "HashMap (7) (11)"
//       },{
//         name : "jdk源代码 (1)"
//       },{
//         name : "程序 (1)"
//       },{
//         name : "开发工具 (13)"
//       }]
//     }
// }

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
  height: 150px;
  width: 100%;
  background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);
}
.head-zhongbu {
  height: 600px;
  width: 1000px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.fd-biaoqian {
  height: 80px;
  width: 1000px;
  background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);
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
  background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  color: #ffffff;
  font-weight: bold;
  font-family: 华文细黑;
  margin-top: 15px;
  border-radius: 5px;
}
.fd-jave {
  height: 40px;
  width: 90px;
  background: #e41749;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave1 {
  height: 40px;
  width: 90px;
  background: #f5587b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave2 {
  height: 40px;
  width: 110px;
  background: #f5587b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave3 {
  height: 40px;
  width: 110px;
  background: #ff8a5c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave4 {
  height: 40px;
  width: 110px;
  background: #f29c2b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave5 {
  height: 40px;
  width: 80px;
  background: #515bd4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave6 {
  height: 40px;
  width: 120px;
  background: #8134af;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave7 {
  height: 40px;
  width: 110px;
  background: #dd2a7b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave8 {
  height: 40px;
  width: 120px;
  background: #8bc24c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave9 {
  height: 40px;
  width: 90px;
  background: #fd5f00;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave10 {
  height: 40px;
  width: 150px;
  background: #001871;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave11 {
  height: 40px;
  width: 100px;
  background: #8bc24c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave12 {
  height: 40px;
  width: 90px;
  background: #ff585d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave13 {
  height: 40px;
  width: 80px;
  background: #ffb549;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave14 {
  height: 40px;
  width: 80px;
  background: #41b6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave15 {
  height: 40px;
  width: 90px;
  background: #de4307;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave16 {
  height: 40px;
  width: 90px;
  background: #f29c2b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave17 {
  height: 40px;
  width: 90px;
  background: #f6d04d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave18 {
  height: 40px;
  width: 150px;
  background: #8bc24c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave19 {
  height: 40px;
  width: 140px;
  background: #fad3cf;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave20 {
  height: 40px;
  width: 90px;
  background: #a696c8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave21 {
  height: 40px;
  width: 130px;
  background: #2470a0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave22 {
  height: 40px;
  width: 120px;
  background: #de4307;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave23 {
  height: 40px;
  width: 120px;
  background: #8bc24c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave24 {
  height: 40px;
  width: 160px;
  background: #96ceb4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave25 {
  height: 40px;
  width: 120px;
  background: #ffeead;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave26 {
  height: 40px;
  width: 120px;
  background: #d9534f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave27 {
  height: 40px;
  width: 120px;
  background: #ffad60;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave28 {
  height: 40px;
  width: 90px;
  background: #f07810;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-jave29 {
  height: 40px;
  width: 120px;
  background: #eec60a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 10px 10px 5px #888888
}
.fd-time{
  height: 100%;
  width: 800px;

  margin-top: -20px;
  border-radius: 5px;
}

</style>
