import { EventEmitter } from "events";

import dispatcher from "../dispatcher/dispatcher";
console.log(dispatcher);
class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = this.setTodos();

  }

  setTodos() {
    return [
      {
        id: 1,
        text: "Get Milk",
        complete: false
      },
      {
        id: 2,
        text: "Get Chocolate",
        complete: false
      },
      {
        id: 3,
        text: "Get Rice",
        complete: false
      },
      {
        id: 4,
        text: "Get Chicken",
        complete: false
      }
    ];
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch (action.type) {
      case "CREATE_TODO":
        this.createTodo(action.text)
        break;
      default:
    }
  }

  createTodo(text) {
    console.log("Creating Todo");
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false
    });

    console.log("change event emitted");
    this.emit("change");
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
