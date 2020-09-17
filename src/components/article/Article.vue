<template>
<div class="article">
  <div class="fd-nav"></div>
  <div class="fd-content">
    <mavon-editor v-model="content"/>
  </div>

</div>
</template>

<script>

  export default {
        name: "Article",
    components: {
    },
    data(){
          return{
            content:'# your markdown content',
          }
    }
    }
</script>

<style scoped>
  .article{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
.fd-nav{
  height: 100px;
  width: 100%;
  background: #66b1ff;
}
  .fd-content{
    flex: 1;
    width: 100%;
    background: #9a6e3a;
  }
  .v-note-wrapper{
    height: 100%;
  }
  >>> h1{
    color: #66b1ff ;
  }
</style>
