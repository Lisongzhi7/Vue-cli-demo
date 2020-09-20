<template>
  <div class="myTravel">
    <div class="head">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="center">

    </div>
  </div>
</template>

<script>
    export default {
        name: "MyTravel"
    }
</script>

<style scoped>
  .myTravel{
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
</style>
