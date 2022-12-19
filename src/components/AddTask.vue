<template>
  <form @submit.prevent="handSubmit">
    <input type="text" placeholder=" I need to..." v-model="newTask" />
    <button>Add</button>
  </form>
</template>

<script>
import { useCounterStore } from "../Stores/counter";
import { ref } from "vue";
export default {
  setup() {
    const taskStore = useCounterStore();

    const newTask = ref("");

    const handSubmit = () => {
      if (newTask.value.length > 0) {
        taskStore.addTask({
          id: Math.floor(Math.random() * 1000),
          title: newTask.value,
          isFav: false,
        });
        newTask.value = "";
      }
    };
    return { handSubmit, newTask };
  },
};
</script>

<style>
input{
        padding: 5px 8% 5px 0;
}
button{
        padding: 7px 10px;
    margin: 0 10px;
    border: none;
    color: #fff;
    background-color: #f35b5b;
    border-radius: 5px;

}
</style>