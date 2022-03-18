import React, { Component } from 'react'
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        this.setState({ ...this.state, email: event.target.value })
        /* console.log(event)
        console.log(event.target)
        console.log(event.target.value) */
    }
    passwordHandler = (event) => {
        this.setState({ ...this.state, password: event.target.value })
    }
    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <div className="row">

                        <div className="col-md-4">
                            <pre>{JSON.stringify(this.state)}</pre>
                            <div className="card">
                                <div className="card-header">
                                    <h4>Login</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <input type="text" placeholder="Email Id" className="form-control" onChange={this.emailHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" placeholder="Password " className="form-control" onChange={this.passwordHandler} />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" className="btn btn-success" />
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

export default Login
