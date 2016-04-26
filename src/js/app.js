import React from "react";
import ReactDOM from "react-dom";

import TodoLayout from "./components/TodoLayout";
export default class Layout extends React.Component {
  render() {
    return (
      <TodoLayout />
    )
  }
}

ReactDOM.render(<Layout />, document.getElementById("flux-app"));
