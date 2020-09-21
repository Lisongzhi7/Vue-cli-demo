<template>
  <div class="guidang">
    <div class="guidang-head">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="bkrj">
      <div class="bkrj-a">
        <div class="bkrj-center">
          <div class="bkrj_ch"></div>
          <h2 class="title">博客日记</h2>
          <div class="bkrj_en"></div>
        </div>
        <span class="title-a">Diary</span>
      </div>
    </div>
    <div class="guidang-toubu">
      <div class="guidang-zuo">
        <div v-for="(item,index) of list" class="guidang-zuo-a">
          <div class="zuo-head">
            <div class="zuo-head-img">
              <img :src="item.image"/>
            </div>
          </div>
          <div class="zuo-center">
            <div class="zuo-center-head">
            <div class="zuo-center-shang">
              <span>{{item.name}}</span>
            </div>
            <div class="zuo-center-zhong">
              <span>{{item.descInfo}}</span>
            </div>
            <div class="zuo-center-xia">
              <span><i class="iconfont icon-shizhong"></i><span>{{item.createTimeStr}}</span></span>
              <span><i class="iconfont icon-gerenzhongxin1"></i><span>{{item.author}}</span></span>
              <span><i class="iconfont icon-mulu"></i><span >{{item.name}}</span></span>
              <span><i class="iconfont icon-guankan01"></i><span>{{item.view}}</span></span>
              <span><i class="iconfont icon-aixin"></i><span>{{item.likeNum}}</span></span>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="guidang-you">
        <div class="guidang-you-head">
          <div class="you-head-zuo">
            <el-input
              placeholder="请输入关键字"
              v-model="input"
              clearable>
            </el-input>
          </div>
          <div class="you-head-you">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>

        </div>
        <div class="guidang-you-center">
          <div class="you-center-a">
            <div class="you-center-a-a">
              <span>站长推荐</span>
            </div>
          </div>
          <div class="you-center-b">
            <div v-for="(item,index) of List" class="you-center-b-a">
              <div class="you-center-b-a1">
                <img :src="item.image"/>
              </div>
              <div class="you-center-b-a2">
                <span>{{item.title}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="guidang-bottom">
          <div class="guidang-bottom-head">
          <div class="biaoqian-head">
            <span>标签云</span>
          </div>
          <div class="biaoqian-bottom">
            <div data-aos="zoom-in" data-aos-duration="2000" v-for="(item,index) of biaoqianList"
                 :style="{background:randoColor()}" :class="createClasee(index)" class="bast">{{ item.name }}
            </div>
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
  data(){
    return{
      input:'',
      list:[],
      List:[{
        image:'http://xlsb.luokangyuan.com/31.jpg',
        title:'想折腾也得看运气不是，我是不是太倒霉了？！'
      },{
        image:'http://xlsb.luokangyuan.com/23.jpg',
        title:'想折腾也得看运气不是，我是不是太倒霉了？！'
      },{
        image:'http://xlsb.luokangyuan.com/24.jpg',
        title:'想折腾也得看运气不是，我是不是太倒霉了？！'
      },],
      biaoqianList:[{
        name: 'Web前端'
      }, {
        name: 'CSS'
      }, {
        name: 'Java'
      }, {
        name: 'Html'
      }, {
        name: 'JavaScript'
      }, {
        name: '日常总结'
      }, {
        name: 'GitHub'
      }, {
        name: '每日读书'
      },],
      query:{
        author:'',
        classifyId:'',
        desc:'',
        limit: 0,
        name:''
      }
    }
  },
  methods:{
    getSearch(){
      this.$api.post(`/api/v1/blogs`,this.query, (res) => {
        if (res) {
          this.query = res.data;
        }
      })
    },
    getBlogs(){
      this.query.limit = '';
      this.$api.post(`/api/v1/blogs`,this.query, (res) => {
        if (res) {
            this.list = res.data;
        }
      })
    },
    createClasee(index) {
      return "" + (index + 1);
    },
    randoColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      let r1 = r.toString(16).length == 1 ? '0' + r.toString(16) : r.toString(16);
      let g1 = g.toString(16).length == 1 ? '0' + g.toString(16) : g.toString(16);
      let b1 = b.toString(16).length == 1 ? '0' + b.toString(16) : b.toString(16);
      var color = '#' + r1 + g1 + b1;
      return color;
    },
  },
mounted() {
    this.getBlogs();
    this.getSearch();
}
}

</script>

<style scoped>
  .guidang{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f5f5f5;
  }
  .guidang-head{
    height: 400px;
    width: 100%;
  }
  .guidang-head img{
    height: 400px;
    width: 100%;
  }
  .guidang-toubu{
    width: 1300px;
    display: flex;
    flex-direction: row;
  }
  .bkrj{
    height: 100px;
    width: 1300px;
    margin-top: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bkrj-center {
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

  .bkrj_ch {
    height: 1px;
    width: 100px;
    background: #000;
    margin-right: 30px;
    margin-top: 30px;
  }

  .bkrj_en {
    height: 1px;
    width: 100px;
    background: #000;
    margin-left: 30px;
    margin-top: 30px;
  }


  .guidang-zuo{
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .guidang-zuo-a{
    height: 200px;
    width: 860px;
    display: flex;
    flex-direction: row;
    background: #fff;
    margin-top: 20px;
  }
  .guidang-zuo-a:hover{
    cursor: pointer;
    color: #66b1ff;
    box-shadow: rgba(0,0,0,.1) 3px 5px 5px;
  }
  .zuo-head{
    height: 200px;
    width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .zuo-head-img{
    height: 180px;
    width: 260px;
    overflow: hidden;
  }
  .zuo-head img:hover{
    transform: scale(1.1,1.1);
    transition: transform 0.7s ease;
  }
  .zuo-head img{
    height: 180px;
    width: 260px;
    transform: scale(1.0, 1.0);
    transition: transform 0.7s ease;
  }
  .zuo-center{
    height: 200px;
    width: 570px;
    display: flex;
    align-items: center;

  }
.zuo-center-head{
  height: 180px;
  width: 560px;
  display: flex;
  flex-direction: column;
}
.zuo-center-shang{
  height: 50px;
  width: 560px;
  font-size: 26px;
  font-family: 'Alibaba-PuHuiTi-Regular';
}

.zuo-center-zhong{
  height: 90px;
  width: 560px;
  font-size: 16px;
}
.zuo-center-xia{
  height: 40px;
  width: 560px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.zuo-center-xia i{
  margin-left: 10px;
}
  .guidang-you{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .guidang-you-head{
    height: 50px;
    width: 280px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
  }
  .you-head-zuo{
    height: 50px;
    width: 170px;
  }
  .you-head-you{
    height: 50px;
    width: 60px;
  }
  .el-button{
    margin-left: 21px;
  }
  .guidang-you-center{
    height: 340px;
    width: 280px;
    margin-top: 30px;
    background: #fff;
  }
  .you-center-a{
    height: 60px;
    width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .you-center-a-a{
    height: 40px;
    width: 260px;
    margin-top: 20px;
  }
  .you-center-a-a span{
    font-size: 22px;
    font-family: Alibaba-PuHuiTi-Regular;
  }
  .you-center-b{
    height: 80px;
    width: 280px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .you-center-b-a:hover{
    cursor: pointer;
    color: #63a35c;
  }
  .you-center-b-a{
    height: 70px;
    width: 260px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .you-center-b-a1{
    height: 70px;
    width: 90px;
  }
  .you-center-b-a1 img{
    height: 70px;
    width: 90px;
  }
  .you-center-b-a2{
    height: 70px;
    width: 160px;
    margin-left: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .guidang-bottom{
    height: 250px;
    width: 280px;
    margin-top: 30px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .guidang-bottom-head{
    height: 230px;
    width: 260px;
    display: flex;
    flex-direction: column;
  }
.biaoqian-head{
  height: 50px;
  width: 260px;
  font-size: 22px;
  font-family: 'Alibaba-PuHuiTi-Regular';
}
  .biaoqian-bottom{
    height: 180px;
    width: 260px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: end;
  }
.biaoqian-bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.biaoqian-bottom:hover{
  cursor: pointer;
}
  .bast {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 5px;
    margin-top: 7px;
    margin-right: 5px;
    padding: 8px 8px;
    color: #fff;
  }
</style>
