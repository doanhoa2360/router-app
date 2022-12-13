<template>
  <nav>
    <h1>my vue</h1>
    <ul class="nav-link">
        <li><a href="/">Home</a> </li>
        <li><a href="/product">Product</a></li>
        <li><a href="/about">About</a></li>
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