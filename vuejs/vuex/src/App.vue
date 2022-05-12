<template>
  <div id="app">
   <h1>Todo List</h1>
   <h2>전체 Todo 갯수</h2>
   <h2>완료한 Todo 갯수</h2>
   <h2>완료 x 갯수</h2>
   <hr>
   <TodoForm/>
   <hr>
   <TodoList/>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoForm, TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
