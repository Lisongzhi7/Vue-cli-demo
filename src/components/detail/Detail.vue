<template>
  <div class="detail">
  <div class="head">
    <img src="http://xlsb.luokangyuan.com/30.jpg"/>
  </div>
    <div class="center">
      <div class="center-detail">
        <div class="center-dingbu"></div>
        <div class="center-label">
          <span class="author"></span>
          <span class="name"></span>
          <span class="createTime"></span>
        </div>
        <div class="center-Name"></div>
        <div class="center-descInfo"></div>
        <div class="center-content">
          <span>{{blog.content}}</span>
        </div>
        <div class="center-xia"></div>
      </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Detail",
      data(){
          return{
            id:'',
            blog:{}
          }
      },
      methods:{
          getDetail(){
            this.$api.get(`/api/v1/blog/${this.id}`,null, (res) => {
              if (res) {
                  this.blog = res.data
              }
            })
          }
      },
      mounted() {
          let id = this.$route.params.id;
          this.id = id;
        this.getDetail();
      }
    }
</script>

<style scoped>
  .detail{
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
    justify-content: center;
  }
  .center-detail{
    width: 800px;
    background: #a8edea;
    display: flex;
    flex-direction: column;
  }
  .center-dingbu{
    height: 10px;
    width: 800px;
    background: #bd2c00;
  }
  .center-label{
    height: 50px;
    width: 800px;
    background: #cf9236;
  }
  .center-Name{
    height: 300px;
    width: 800px;
    background: #795da3;
  }
  .center-descInfo{
    height: 100px;
    width: 800px;
    background: #63a35c;
  }
  .center-content{
    height: 900px;
    width: 800px;
    background: #409eff;
  }
</style>
