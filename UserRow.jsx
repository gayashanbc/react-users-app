import React, { Component } from 'react';

class UserRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.userId}</td>
                <td>{this.props.user.fName}</td>
                <td>{this.props.user.lName}</td>
                <td>{this.props.user.age}</td>
            </tr>
        );
    }
}

export default UserRow;