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
            <img :src="item.url"/>
          </div>
        </div>
        <div class="myjj-you">
          <div class="you-shang">
            <span>{{item.name}}</span>
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
    data() {
      return {
        list: [],
      }
    },
    methods: {
      getFamous() {
        this.$api.get(`/api/v1/book`, null, (res) => {
          if (res) {
            this.list = res.data;
          }
        })
      }
    },
    mounted() {
      this.getFamous();
    }
  }
</script>

<style scoped>
  .famousAphorism {
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
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .center-myjj {
    height: 300px;
    width: 600px;
    margin-top: 80px;
    background: #fff;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .myjj-zuo {
    height: 300px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .zuo-img {
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .zuo-img img {
    height: 250px;
    width: 190px;
    transform: scale(1.0, 1.0);
    transition: transform 0.7s ease;
  }

  .zuo-img img:hover {
    transform: scale(1.1, 1.1);
    transition: transform 0.7s ease;
  }

  .myjj-you {
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .you-shang {
    height: 170px;
    width: 380px;
    font-size: 14px;
  }

  .you-xia {
    height: 80px;
    width: 380px;
    display: flex;
    justify-content: flex-end;
  }

  .you-xia img {
    height: 50px;
    width: 50px;
    margin-right: 30px;
  }
</style>
