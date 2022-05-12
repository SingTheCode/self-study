<template>
  <div>
    <h3>Todo 입력 영역</h3>
    <input type="text" v-model.trim='todoTitle'>
    <button @click="createTodo">ADD TODO</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data: () => {
    return {
      todoTitle: '',
    }
  },
  methods: {
    createTodo() {
      const todoItem = {
        title: this.todoTitle,
        isCompleted: false,
        date: new Date().getTime(),
      }

      if (todoItem.title) {
        this.$store.dispatch('createTodo', todoItem);
      }
      
      this.todoTitle = '';
    }
  }
}
</script>

<style>
</style>
