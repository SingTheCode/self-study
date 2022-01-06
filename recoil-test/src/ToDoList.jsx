import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "./atoms/todo";
import { TodoItem } from "./TodoItem";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoListStats } from "./TodoListStats";
import { TodoListFilters } from "./TodoListFilters";

export function ToDoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <React.Fragment>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </React.Fragment>
  );
}
