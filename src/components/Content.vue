
<template>
  <h1>content page</h1>
   <router-link to="/">
  <p>Home</p>
  </router-link>
  <button  @click="goItem">Go Item</button>
  <router-view/>
</template>

<script >
export default{
  methods: {
   goItem(){
  this.$router.push('content/1')
}
  },
}
</script>

<style>

</style>