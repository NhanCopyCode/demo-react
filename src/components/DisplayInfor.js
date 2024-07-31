import React from "react";
import "./DisplayInfor.scss";

class DisplayInfor extends React.Component {
  state = {
    showListUser: true,
    name: "Thành Nhân",
  };

  handleShowHidelistUser = (event) => {
    this.setState({showListUser: !this.state.showListUser});
  }
  render() {
    const { listUser } = this.props;
    const { showListUser} = this.state;
    return (
      <div>
        <button onClick={(event) => {this.handleShowHidelistUser(event)}}>Show hide list user</button>
        {
            showListUser &&
            <div className="list-user-infor">
                <h1>Đây là hiển thị infor</h1>
                {listUser.map((user) => {
                return (
                    <div key={user.id} className={+user.age > 21 ? "green" : "red"}>
                    Xin chào, tôi tên là {user.name}, tôi {user.age} tuổi
                    </div>
                );
                })}
            </div>
        }
      </div>
    );
  }
}

export default DisplayInfor;
