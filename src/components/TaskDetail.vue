<template>
  <div class="task" :class="{active: task.isFav}">
    <div class="item">
<h1> {{task.title}}</h1></div>
<div class="button" >
    <button @click="taskStore.deleteTask(task.id)">Delete</button>
    <button class="like" 
    :class="{active: task.isFav}"
    @click="taskStore.toggleFav(task.id)">OK</button>
</div>
  </div>
</template>

<script>
import {useCounterStore} from '../Stores/counter'
export default {

props:['task'],

setup() {
  const taskStore = useCounterStore()

  return {taskStore}
}}
</script>

<style>
.like.active{
 
  background-color: rgb(59, 58, 58);
}
.task{
    align-items: center;
    display: flex;
}
.task.active{
  background-color: rgb(228, 224, 224);
}
.item{
  
    width: 60%;

}
</style>