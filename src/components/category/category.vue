<template>
  <div class="category">
    <input v-model="name" ></input>
    <div @click="show">看看</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "category",
  data () {
    return {
      name: "12324124",
      wenzhang: []
    }
  },
  methods: {
    show () {
      this.name = "123";
    },
    test() {

    }

  },
  mounted() {

  }
}
</script>

<style scoped>
.category{
  width: 100%;
  height: 100%;
  margin-top: 100px;
}

</style>
