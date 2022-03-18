import React, { Component } from 'react'

class Message extends Component {
    message = "Hello,"
    gmHandler = () => {
        this.message = "Good Morning";
        this.forceUpdate()
    }
    gnHandler = () => { }
    render() {
        return (
            <div>
                <h3>{this.message}</h3>
                <button onClick={this.gmHandler}>GM</button>
                <button onClick={this.gnHandler}>GN</button>
            </div>
        )
    }
}

export default Message
