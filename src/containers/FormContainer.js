import React from "react";
import Form from "../components/Form.js";
import { connect } from "react-redux";
import { submitForm, updateFormInput, formDone } from "../redux/reducer";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.updateForm = this.updateForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formDone = this.formDoneLoading.bind(this);
  }

  updateForm(newInput) {
    this.props.updateFormInput(newInput);
  }

  submitForm() {
    this.props.submitForm();
  }

  formDoneLoading() {
    setTimeout(() => {
      this.props.formDone();
    }, 5000)
   
  }


  render() {
    if (this.props.loading) {
      this.formDoneLoading()
    }

    return (
      <Form
        input={this.props.input}
        loading={this.props.loading}
        isDone={this.props.isDone}
        updateForm={this.updateForm}
        submitForm={this.submitForm}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.formInput,
    loading: state.loading, 
    isDone: state.isDone
  };
};

const mapDispatch = { submitForm, updateFormInput, formDone };

export default connect(mapStateToProps, mapDispatch)(FormContainer);
