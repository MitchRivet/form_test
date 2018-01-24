import React from "react";
import MultiSelectInput from "../components/MultiSelectInput.js";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input />
        <input />
        <MultiSelectInput />
      </div>
    );
  }
}

export default FormContainer;
