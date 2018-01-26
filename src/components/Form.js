import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbyInput: ""
    };
    this.updateHobbyInput = this.updateHobbyInput.bind(this);
    this.updateHobbyList = this.updateHobbyList.bind(this);
  }

  updateHobbyInput(event) {
    this.setState({ hobbyInput: event.target.value });
  }

  updateHobbyList() {
    if (this.state.hobbyInput) {
      this.props.updateForm({
        ...this.props.input,
        ...{
          hobbies: [...this.props.input.hobbies, ...[this.state.hobbyInput]]
        }
      });
      this.setState({ hobbyInput: "" });
    }
  }

  render() {
    let hobbies = this.props.input.hobbies.map(h => {
      return <li>{h}</li>;
    });

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={e => {
            debugger;
            this.props.submitForm();
            e.preventDefault();
          }}
        >
          <h1>Nike Form Test</h1>
          <h2>First Name</h2>
          <input
            value={this.props.input.firstName}
            onChange={e =>
              this.props.updateForm({
                ...this.props.input,
                ...{ firstName: e.target.value }
              })}
          />
          <h2>Last Name</h2>
          <input
            value={this.props.input.lastName}
            onChange={e =>
              this.props.updateForm({
                ...this.props.input,
                ...{ lastName: e.target.value }
              })}
          />
          <h2>Hobbies</h2>
          <ul>{hobbies}</ul>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <input
              value={this.state.hobbyInput}
              onChange={this.updateHobbyInput}
            />
            <button onClick={this.updateHobbyList} type="button">
              Add Hobby
            </button>
          </div>
          <input
            style={{ marginTop: "32px" }}
            type="submit"
            value="Submit Form"
          />
          {this.props.loading && !this.props.isDone && <h1>Loading...</h1>}

          {!this.props.loading &&
            this.props.isDone && (
              <div
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  marginTop: "8px"
                }}
              >
                <h1>Done!</h1>
                <p>First Name: {this.props.input.firstName}</p>
                <p>Last Name: {this.props.input.lastName}</p>
              </div>
            )}
        </form>
      </div>
    );
  }
}

export default Form;
