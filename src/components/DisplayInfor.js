import React, { useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
//     state = {
//         showListUser: true,
//         name: "Thành Nhân",
//     };

//     handleShowHidelistUser = (event) => {
//         this.setState({ showListUser: !this.state.showListUser });
//     };
//     render() {
//         const { listUser } = this.props;
//         const { showListUser } = this.state;
//         for (let i = 0; i <= 100; i++) {
//             console.log(i + ".Anh yêu em");
//         }
//         return (
//             <div>
//                 <button
//                     onClick={(event) => {
//                         this.handleShowHidelistUser(event);
//                     }}
//                 >
//                     Show hide list user
//                 </button>
//                 {showListUser && (
//                     <div className="list-user-infor">
//                         <h1>Đây là hiển thị infor</h1>
//                         {/* <img src={logo} alt="Đây là logo" /> */}
//                         {listUser.map((user) => {
//                             return (
//                                 <div
//                                     key={user.id}
//                                     className={+user.age > 21 ? "green" : "red"}
//                                 >
//                                     Xin chào, tôi tên là {user.name}, tôi{" "}
//                                     {user.age} tuổi

//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delelte</button>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = (event) => {
       setShowHideListUser(!isShowHideListUser); 
    }
    return (
        <div>
            <div>
                <button onClick={(event) => handleShowHideListUser(event)}>
                    {
                        isShowHideListUser === true ? 'Hide list user' : "Show list user"
                    }
                </button>
            </div>
            {isShowHideListUser && (
                <div className="list-user-infor">
                    <h1>Đây là hiển thị infor</h1>
                    {/* <img src={logo} alt="Đây là logo" /> */}
                    {listUser.map((user) => {
                        return (
                            <div
                                key={user.id}
                                className={+user.age > 21 ? "green" : "red"}
                            >
                                Xin chào, tôi tên là {user.name}, tôi {user.age}{" "}
                                tuổi
                                <div>
                                    <button
                                        onClick={() =>
                                            props.handleDeleteUser(user.id)
                                        }
                                    >
                                        Delelte
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DisplayInfor;
