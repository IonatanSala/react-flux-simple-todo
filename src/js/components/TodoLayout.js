import React from "react";

import TodoForm from "./TodoLayout/TodoForm";
import TodoList from "./TodoLayout/TodoList";
import TodoStore from "../stores/TodoStore";
import * as TodoActions from "../actions/TodoActions";

export default class TodoLayout extends React.Component {

  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = { todos: TodoStore.getAll() };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    console.log("Get todos getting fired");
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  handleNewTodoSubmission(text) {
    TodoActions.createTodo(text);
  }

  render() {
    return (
      <div class="todoContainer">
        <TodoForm handleNewTodoSubmission={this.handleNewTodoSubmission.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}
