
<template>
  
  <p>Home</p>
  <button @click="goHome2">Go Home 2</button>
  <router-link to='/item1'><p>Go Item</p> </router-link>
  <router-link to='/item2'><p>Go Item 2</p> </router-link>
   <router-view/>
</template>

<script >
export default{
  methods: {
   goHome2(){
  this.$router.push('/1')
}
  },
}

</script>

<style>

</style>