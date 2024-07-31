import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: 'Thành nhân state',
    age: '20',
  };

  handleOnChange = (event) => {
    console.log(event, event.target.value);
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        Xin chào thế giới, tên của thôi là {this.state.name}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChange(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
