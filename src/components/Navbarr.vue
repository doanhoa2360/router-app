//Navbarr.vue
<template>
  <nav>
    <h1>my vue</h1>
    <ul class="nav-link">
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/product">Product</router-link></li>
        <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
name:"Navbarr"
}
</script>

<style scoped>
nav{
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}
nav ul.nav-link{
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
}
a{
    color: #fff;
    text-decoration: none;
}
a:hover{
    color: aquamarine;
}
</style>