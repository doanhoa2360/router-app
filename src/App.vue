<template>
  <Navbarr/>
  <router-view/>
</template>

<script>
import Navbarr from './components/Navbarr'

export default {
  name: 'App',
 components:{Navbarr}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
