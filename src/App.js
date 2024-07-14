import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreaseCounter } from "./redux/action/counterAction";
import MyComponent from "./components/MyComponent";
import React from "react";

class App extends React.Component {
  
    state =  {
      name: 'Thành Nhân',
      address: 'Hoi dan IT',
      age: 21
    };
    //JSX
    render() {
      return (
        <div>
            Xin chào thế giới, tên của thôi là {this.state.name}
            <MyComponent></MyComponent>
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
