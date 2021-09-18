import React from "react";
import ListTodo from "./ListTodo";
const ListTodos = ({ todos, removeTodo }) => {
  return todos.map((todo) => {
    return <ListTodo key={todo.id} todo={todo} removeTodo={removeTodo} />;
  });
};

export default ListTodos;
