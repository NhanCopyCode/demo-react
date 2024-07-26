import React from "react";

class DisplayInfor extends React.Component {
    
    render() {
        const {listUser} = this.props;
        return (
           <div>
                <h1>Đây là hiển thị infor</h1>
                {
                    listUser.map((user) => {
                       return (
                        <div key={user.id}>
                            Xin chào, tôi tên là {user.name}, tôi {user.age} tuổi

                        </div>
                       ) 
                    })
                }
           </div>
        )
    }
}

export default DisplayInfor;