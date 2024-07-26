import React from "react";

class UserInfor extends React.Component {
    state =  {
        name: 'Thành Nhân',
        address: 'Hoi dan IT',
        age: 21
      };
  
      handleOnChange = (event) => {
          console.log(event, event.target.value);
          this.setState({
              name: event.target.value
          })
      }
  
      handleOnSubmit = (event) => {
          event.preventDefault();
          console.log(this.state);
          alert('me')
      }
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

export default UserInfor;
