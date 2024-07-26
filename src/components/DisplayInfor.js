import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const {age , name} = this.props;
        return (
           <div>
                <h1>Đây là hiển thị infor</h1>
                <div>Tên của tôi là {name}</div>
                <div>Tuổi của tôi là {age}</div>
                <div>Array được truyền qua {this.props.myArr.join(',')}</div>
           </div>
        )
    }
}

export default DisplayInfor;