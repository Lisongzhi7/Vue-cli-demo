<template>
<div class="newest">
  <div class="head">
    <div class="articleManagement-head">
      <img src="http://xlsb.luokangyuan.com/1.jpg"/>
      <span>文章管理</span>
    </div>
  </div>
  <div class="bottom"></div>
</div>
</template>

<script>
    export default {
        name: "Newest"
    }
</script>

<style scoped>
  .articleManagement {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .head {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .articleManagement-head {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .articleManagement-head span {
    margin-left: 20px;
    font-size: 22px;
  }

  .articleManagement-head img {
    height: 40px;
    width: 40px;
    border-radius: 20px;
    margin-left: 30px;
  }

  .head {
    height: 60px;
    width: calc(100% - 10px);
    background: #e4e7ed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

  .bottom {
    height: 100%;
    width: calc(100% - 10px);
    margin-left: 10px;
    margin-top: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
</style>
