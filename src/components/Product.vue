
<template>
  <h1>Product page</h1>
  <table >
  </table>
  <User v-for="users in userList" :key="users.id" :users="users"/>
  <router-view />
</template>

<script setup>
import { ref, onMounted } from "vue";
import User from './User.vue'
const userList = ref([]);
onMounted(async ()=>{
    const result = await fetch("https://63807111786e112fe1afcb0e.mockapi.io/users/")
    const res = await result.json();
    userList.value=res;
});
</script>

<style>
table{
  width: 100%;
}
</style>