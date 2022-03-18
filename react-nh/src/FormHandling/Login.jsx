import React from 'react'

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    emailHandler = (event) => {
        this.setState({ ...this.state, email: event.target.value })
    }
    passwordHandler = (event) => {
        this.setState({ ...this.state, password: event.target.value });
    }
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <label>Email Id</label>
                <input type="text" onChange={this.emailHandler} /> <br /><br />
                <label >Password</label>
                <input type="text" onChange={this.passwordHandler} /> <br />
                <input type="submit" />
            </form>
        </div>
    }
}
export default Login