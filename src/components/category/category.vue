<template>
<div class="category">
  <div class="sf-panel">
    <img src="http://xlsb.luokangyuan.com/10.jpg"/>
  </div>

</div>
</template>

<script>
export default {
  name: "category",

}

</script>

<style scoped>

.category{
    height: 300px;
    width: 400px;
    background: #a8edea;
    margin-top: 90px;
}
.sf-panel {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.sf-panel img {
  width: 400px;
  height: 300px;
  transform: scale(1.0, 1.0);
  -ms-transform: scale(1.0, 1.0);
  -moz-transform: scale(1.0, 1.0);
  -webkit-transform: scale(1.0, 1.0);
  -o-transform: scale(1.0, 1.0);
  -webkit-transition: transform 0.7s ease;
  transition: transform 0.7s ease;
}
img:hover{
   transform: scale(1.05,1.05);
   -ms-transform:scale(1.05,1.05);
   -webkit-transform:scale(1.05,1.05);
   -o-transform:scale(1.05,1.05);
   -webkit-transition: transform 0.7s ease;
   transition: transform 0.7s ease;
 }


</style>
