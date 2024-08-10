// class component
import React, { useState } from "react";
// class MyComponent extends React.Component {
//     // JSX
   
//     render() {
//        return (
//             <div>
//                 My first component
//                 { Math.random() }
//             </div>
//        );     
//     }
// }

const MyComponent = () => {
    const [listUser, setListUser] = useState([
        {id: 1, name: "Thành Nhân", age: "20"},
        {id: 2, name: "Thành Nhân 2", age: "21"},
        {id: 3, name: "Thành Nhân 3", age: "22"},
        {id: 4, name: "Thành Nhân 4", age: "23"},
    ]);

    const [user, setUser] = useState({
        name: "Thành Nhân hook",
        age : '20',
    })
    
    const handleOnChange = event => {
        setUser({
            name: event.target.value
        });
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        const newUser = {
            name:  user.name,
            age: '20',
            
        }
        setListUser([newUser, ...listUser]);
    }
    return (
        <div>
            Xin chào tôi tên là {user.name}
            <form onSubmit={event => handleOnSubmit(event)}>
                Add new user
                <input type="text"
                    value = {user.name}
                    onChange={event => handleOnChange(event)}
                />

                <button type="submit">Submit</button>
            </form>

            <div style={{marginTop: '20px'}}>
                Danh sách tất cả người dùng
                {
                    listUser.map(user => {
                        return (
                            <div
                                key={user.id}
                                className={+user.age > 21 ? "green" : "red"}
                            >
                                Xin chào, tôi tên là {user.name}, tôi {user.age}{" "}
                                tuổi
                                <div>
                                    <button
                                        // onClick={() =>
                                        //     props.handleDeleteUser(user.id)
                                        // }
                                    >
                                        Delelte
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyComponent;
// function component