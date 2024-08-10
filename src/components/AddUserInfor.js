import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: 'Thành nhân state',
//     age: '20',
//   };

//   handleOnChange = (event) => {
//     console.log(event, event.target.value);
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         Xin chào thế giới, tên của thôi là {this.state.name}
//         <form
//           onSubmit={(event) => {
//             this.handleOnSubmit(event);
//           }}
//         >
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChange(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
	const [userName , setUserName] = useState({
		name: 'Thành Nhân',
		age: '20',
	});
	const [listUser, setListUser] = useState();
	const handleOnSubmit = (event) => {
		setListUser(
			props.handleAddNewUser({
				name: userName.name,
				age: 20
			})
		);
	}
	
	const handleOnChange = event => {
		setUserName({
			name: event.target.value
		});
	}
    return (
        <div>
            Xin chào thế giới, tên của thôi là {userName.name}
            <form
                onSubmit={(event) => {
                    handleOnSubmit(event);
                }}
            >
                <input
                    value={userName.name}
                    type="text"
                    onChange={(event) => handleOnChange(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};
export default AddUserInfor;
