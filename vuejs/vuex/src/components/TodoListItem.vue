<template>
  <div>
    <span>{{todo.title}}</span>
    <button>Delete Todo</button>
  </div>
</template>

<script>

export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', this.todo);
    }
  }
}
</script>

<style>
</style>
