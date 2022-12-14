// About.vue
<template>

 <router-link to="/product">
  <button>Back</button>


  </router-link>
  <p>{{queryUsers.name}}</p>
  <p>{{queryUsers.country}}</p>
  <p><img :src="queryUsers.avatar" alt=""></p>
</template>

<script setup>
import {ref , onMounted} from 'vue'
import { useRoute} from 'vue-router'

const queryUsers=ref({})
const route = useRoute()

onMounted(async ()=>{
    const result = await fetch(`https://63807111786e112fe1afcb0e.mockapi.io/users/${route.params.id}`)
    const res = await result.json();
    queryUsers.value=res;
console.log(queryUsers)
})
</script>

<style>

</style>