import React from "react";
import { render } from "react-dom";
import FormApp from "./FormApp.js"

class App extends React.Component {
  render() {
    return (
      <FormApp />
    );
  }
}

render(<App />, document.getElementById("app"));