import React from "react";
import { Provider } from "react-redux";
import FormContainer from "../containers/FormContainer.js";
import store from "../redux/store";

class FormApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FormContainer />
      </Provider>
    );
  }
}

export default FormApp;

