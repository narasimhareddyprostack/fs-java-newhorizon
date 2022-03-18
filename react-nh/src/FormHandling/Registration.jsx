import React, { Component } from 'react'
class Registration extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        mobile: ""
    }
    updateHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        alert(JSON.stringify(this.state))
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Registration</h3>
                                </div>
                                <div className="card-body">
                                    <form action="" onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="username" placeholder="User Name" onChange={this.updateHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.updateHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="password" placeholder="Password" onChange={this.updateHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="mobile" placeholder="Mobile" onChange={this.updateHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-primary" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration
