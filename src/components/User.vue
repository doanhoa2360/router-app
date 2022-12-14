<template>

 
  <tr>
    <td> <router-link :to="`/product/${users.id}`">
          {{ users.name }}</router-link
        ></td>
    <td>{{ users.country }}</td>
    
  </tr>

</template>

<script setup>
defineProps({
  users: Object,
});
</script>

<style>
table{
  width: 100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>