import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";
import UserInfor from "./components/UserInfor";
import DisplayInfor from "./components/DisplayInfor";

class App extends React.Component {
  
   
    //JSX
    render() {
      const myAge = 22;
      const array = [1, 2, 3, 4]
      return (
        <div>
          
            <UserInfor />
            <br />
            <DisplayInfor name="Thành Nhân props" age={myAge} myArr = {array}/>
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
