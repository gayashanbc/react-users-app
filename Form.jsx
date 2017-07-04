import React, {Component} from 'react';

class Form extends Component {

    constructor(props){
        super(props);
        this.formSubmitted = this.formSubmitted.bind(this);
    }

    formSubmitted(){
        this.props.formSubmissionHandler(this.refs.fName.value,this.refs.lName.value,this.refs.age.value);
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                    <h1>{this.props.formTitle}</h1><br />
                    <form onSubmit={this.formSubmitted}>
                        <div className="form-group">
                            <label htmlFor="fName">First Name</label>
                            <input ref="fName" className="form-control" id="fName" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lName">Last Name</label>
                            <input ref="lName" className="form-control" id="lName" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input ref="age" className="form-control" id="age" type="text" />
                        </div><br />

                        <input type="submit" className="btn btn-primary" />
                        &nbsp;&nbsp;&nbsp;
                        <input type="reset" className="btn btn-default" />
                    </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        );
    }
}

export default Form;