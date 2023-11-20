<template>
  <div>
    <div class="container">
      <AddTodo></AddTodo>
      <FilterTodos></FilterTodos>
      <Todos></Todos>
    </div>
  </div>
</template>

<script>
import Todos from './components/To-do.vue'
import AddTodo from './components/Add-Todo.vue'
import FilterTodos from './components/FilterTodos.vue'


export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
