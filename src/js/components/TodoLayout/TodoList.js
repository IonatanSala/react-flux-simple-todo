import React from "react";

import Todo from "./TodoList/Todo";

export default class TodoList extends React.Component {

  mapTodos() {
    return this.props.todos.map((todo) => {
      return (
        <Todo key={todo.id} complete={todo.complete} >
          {todo.text}
        </Todo>
      )
    });
  }

  render() {
    var todos = this.mapTodos();

    return (
      <div class="todoList">
        {todos}
      </div>
    )
  }
}
