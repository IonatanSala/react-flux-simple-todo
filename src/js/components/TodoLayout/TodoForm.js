import React from "react";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    }
  }

  updateState(e) {
    this.setState({
      todo: e.target.value
    });
  }

  submitTodo() {
    this.props.handleNewTodoSubmission(this.state.todo);
    this.setState({ todo: "" })
  }

  render() {
    return (
      <div class="todoForm" >
        <input
          type="text"
          value={this.state.todo}
          onChange={this.updateState.bind(this)}
          placeholder="Add new todo."
        />
        <button onClick={this.submitTodo.bind(this)}>Add Todo</button>
      </div>
    )
  }
}
