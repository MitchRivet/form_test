import React from "react";
import { render } from "react-dom";
import FormContainer from "./src/containers/FormContainer.js";

class App extends React.Component {
  render() {
    return <FormContainer />;
  }
}

render(<App />, document.getElementById("app"));
