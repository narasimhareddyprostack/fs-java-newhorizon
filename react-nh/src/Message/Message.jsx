import React, { Component } from 'react'

class Message extends Component {
    state = {
        message: "HEllo"
    }
    messageHandler = (msg) => {
        this.setState({
            message: msg
        })
    }
    render() {
        console.log("Test Case 123")
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3>{this.state.message}</h3>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-success mr-4" onClick={this.messageHandler.bind(this, "Good Morning")}>GM</button>
                                <button className="btn btn-primary mr-4" onClick={this.messageHandler.bind(this, "Good Afternoon")}>GA</button>
                                <button className="btn btn-warning mr-4" onClick={this.messageHandler.bind(this, "Good Night")}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Message
