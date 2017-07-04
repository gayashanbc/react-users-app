import React from 'react';
import Form from './Form.jsx';
import UserList from './UserList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headers: ["User Registration Form", "User List"],
            userList: [
            ]
        }

        this.formSubmissionHandler = this.formSubmissionHandler.bind(this);
    }

    formSubmissionHandler(fName, lName, age) {
        this.state.userList.push({
                "fName": fName,
                "lName": lName,
                "age": age
            });
        this.setState({
            userList: this.state.userList
        });
    }

    render() {
        return (
            <div className='container'>
                <Form formSubmissionHandler={this.formSubmissionHandler} formTitle={this.state.headers[0]} />
                <br />
                <UserList title={this.state.headers[1]} userList={this.state.userList} />
            </div>
        )
    }
}

export default App;