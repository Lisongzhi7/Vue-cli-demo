<template>
  <div class="detail">
    <div class="head">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="center">
      <div class="center-detail">
        <div class="center-dingbu"></div>
        <div class="center-label">
          <div class="center-label-neirong">
            <span class="miaoshu">作者</span>
            <span class="lsz">{{blog.author}}</span>
          </div>
          <div class="center-label-neirong">
            <span class="miaoshu">名称</span>
            <span class="lsz">{{blog.name}}</span>
          </div>
          <div class="center-label-neirong">
            <span class="miaoshu">创建时间</span>
            <span class="lsz">{{blog.createTimeStr}}</span>
          </div>
          <div class="center-label-neirong" v-for="(label,index) of blog.labels">
            <span class="miaoshu">标签</span>
            <span class="lsz">{{label.name}}</span>
          </div>

        </div>

        <div class="center-Name">
          <span>{{blog.name}}</span>
        </div>
        
        <div class="center-content">
          <span v-html="blog.content"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        id: '',
        blog: {}
      }
    },
    methods: {
      getDetail() {
        this.$api.get(`/api/v1/blog/${this.id}`, null, (res) => {
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
  .detail {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f5f5f5;
  }

  .head {
    height: 400px;
    width: 100%;
  }

  .head img {
    height: 400px;
    width: 100%;
  }

  .center {
    height: 100%;
    width: 1300px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }

  .center-detail {
    width: 1300px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

  }

  .center-dingbu {
    height: 10px;
    width: 1300px;
    background: #bd2c00;
  }

  .center-label {
    height: 50px;
    width: 1300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .center-label-neirong {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 20px;
  }

  .miaoshu {
    background: #384e64;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 5px 10px 5px 10px;
  }

  .lsz {
    background: #ff7a64;;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px 10px 5px 10px;
  }

  .center-Name {
    height: 200px;
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center-Name span {
    font-size: 40px;
    color: #000;
    font-weight: bold;
  }

  .center-content {
    width: 1200px;
  }

  >>> span {

  }

  >>> h2 {
    margin-top: 20px;
  }

  >>> h3 {
    margin-top: 20px;
  }

  >>> p {
    margin-top: 20px;
    color: #795da3;
  }

  >>> h4 {
    margin-top: 20px;
  }

  >>> h5 {
    color: #66b1ff;
    font-size: 14px;
  }

  >>> pre {
    margin-top: 20px;
  }

  >>> pre div {
    height: 100%;
    background: #384548;
    padding: 20px 20px 20px 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
  }


</style>
