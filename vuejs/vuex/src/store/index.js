import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {},
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem);
    },
    // DELETE_TODO(state, todoItem) {},
    // UPDATE_TODO_STATUS(state, todoItem) {},
  },
  actions: {
    createTodo(context, todoItem) {
      context.commit("CREATE_TODO", todoItem);
    },
    deleteTodo({ commit }, todoItem) {
      commit("DELETE_TODO", todoItem);
    },
    // updateTodoStatus(context, todoItem) {
    //   context.commit("CREATE_TODO", todoItem);
    // },
  },
});
