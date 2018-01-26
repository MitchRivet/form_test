import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import FormContainer from "../containers/FormContainer.js";
import store from "../redux/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FormContainer />
      </Provider>
    );
  }
}

render(<App />, document.getElementById("app"));
