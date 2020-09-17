<template>
        <div class="admin">
            <div class="fd-nav-box">

              <router-link to="/article"><span>文章管理</span></router-link>
              <router-link to="/create"><span>创建文章</span></router-link>
            </div>
            <div class="fd-data-box">
              <router-view></router-view>
            </div>
        </div>
</template>

<script>
export default {
    name: "Admin"
}
</script>

<style scoped>
.admin{
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
}
  .fd-nav-box{
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fd-nav-box span{
    line-height: 40px;
    font-size: 16px;
  }
  .fd-data-box{
    height: 100%;
    flex: 1;

  }

</style>
