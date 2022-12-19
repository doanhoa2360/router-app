<template>
  <div class="container">
    <p class="name">Task</p>
    <div class="new-task">
      <AddTask />
    </div>
    <nav>
      <button @click="filter = 'all'">All Task</button>
      <button @click="filter = 'favs'">Completed Task</button>
    </nav>
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ counter.totalCount }} tasks</p>
      <div v-for="task in counter.tasks" :key="task">
        <TaskDetail :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ counter.favCount }} tasks</p>
      <div v-for="task in counter.favs" :key="task">
        <TaskDetail :task="task" />
      </div>
    </div>
  </div>

  <router-view />
</template>

<script >
import { ref } from "vue";
import AddTask from "./AddTask.vue";
import TaskDetail from "./TaskDetail.vue";
import { useCounterStore } from "../Stores/counter";
export default {
  components: { TaskDetail, AddTask },
  setup() {
    const counter = useCounterStore();
    counter.getTask();
    const filter = ref("all");
    return { counter, filter };
  },

  methods: {
    goHome2() {
      this.$router.push("/1");
    },
  },
};
</script>

<style>
.container{
      text-align: center;
}
.name{
  font-weight: 900;
  font-size: 30px;
}
.new-task{
      margin: 20px;
}
</style>