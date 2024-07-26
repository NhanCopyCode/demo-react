import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";
import UserInfor from "./components/UserInfor";
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
    render() {
     
      return (
        <div>
          
            <UserInfor />
            <br />
            <DisplayInfor listUser ={this.state.listUser}/>
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
