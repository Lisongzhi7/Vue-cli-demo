<template>
        <div class="admin">
            <div class="fd-nav-box">
              <span style="font-weight: bold">木子李的管理界面</span>
              <router-link to="/carousel"><span>走马灯管理</span></router-link>
              <router-link to="/aboutMe"><span>关于我</span></router-link>
              <router-link to="/excerpt"><span>美文摘抄</span></router-link>
              <router-link to="/trave"><span>我的旅游</span></router-link>
              <router-link to="/create"><span>分类管理</span></router-link>
              <router-link to="/articleManagement"><span>文章管理</span></router-link>
              <router-link to="/article"><span>创建文章</span></router-link>

              <router-link to="/newest"><span>最新文章</span></router-link>

              <router-link to="/paga"><span>我的首页</span></router-link>
              <router-link to="/diary"><span>博客日记</span></router-link>
              <router-link to="/record"><span>碎言碎语</span></router-link>
              <router-link to="/timerShaft"><span>时间轴</span></router-link>
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
    width: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f5f5f5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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
