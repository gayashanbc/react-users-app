import React, { Component } from 'react';
import UserRow from './UserRow.jsx';

class UserList extends Component {
    componentDidMount() {
        console.log(this.props.userList);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h1>{this.props.title}</h1><br />
                    <table className="table table-responsive table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.userList.map(
                                (user, i) => <UserRow key={i} userId = {i} user={user} />
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-2"></div>
            </div>
        );
    }
}

export default UserList;