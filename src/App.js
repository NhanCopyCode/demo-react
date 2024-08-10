import logo from "./logo.svg";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";
import AddUserInfor from "./components/AddUserInfor";
import DisplayInfor from "./components/DisplayInfor";

class App extends React.Component {
  
    state = {
        listUser: [
            {id: 1, name: "Thành Nhân", age: "20"},
            {id: 2, name: "Thành Nhân 2", age: "21"},
            {id: 3, name: "Thành Nhân 3", age: "22"},
            {id: 4, name: "Thành Nhân 4", age: "23"},
        ]
    }
    //JSX
    handleAddNewUser = (userObj) => {
        console.log('Check date from parent: ', userObj);
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        });
    }

    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser];
        listUserClone = listUserClone.filter(user => 
            user.id !== userId
        )
        this.setState({
            listUser: listUserClone
        })
    }
    render() {
     
      return (
        <div>
          
            {/* <AddUserInfor 
                handleAddNewUser = {this.handleAddNewUser}
            />
            <br />
            <DisplayInfor 
                listUser ={this.state.listUser}
                handleDeleteUser = {this.handleDeleteUser}

            /> */}
            <MyComponent />
        </div>
      );
    }
}

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Xin chào mọi người</p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };


export default App;
