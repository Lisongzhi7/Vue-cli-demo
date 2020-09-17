<template>
  <div class="guidang">
    <div class="guidang-head">
      <img src="http://xlsb.luokangyuan.com/30.jpg"/>
    </div>
    <div class="guidang-toubu">

    </div>
  </div>
</template>

<script>
export default {
  name: "Guidang",

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
  }
  .guidang-head{
    height: 400px;
    width: 100%;
    background: #a8edea;
  }
  .guidang-head img{
    height: 400px;
    width: 100%;
  }
  .guidang-toubu{
    height: 600px;
    width: 944px;
    background: #a8edea;
  }
</style>
