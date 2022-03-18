import React, { Component } from 'react'

class Message extends Component {
    state = {
        message: "HEllo"
    }
    gmHandler = () => {
        this.setState({
            message: "Hello,GM"
        })
    }
    gaHandler = () => {
        this.setState({ message: "Good Afternoon" })
    }
    gnHandler = () => {
        this.setState({ message: "Good Night" })
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
                                <button className="btn btn-success mr-4" onClick={this.gmHandler}>GM</button>
                                <button className="btn btn-primary mr-4" onClick={this.gaHandler}>GA</button>
                                <button className="btn btn-warning mr-4" onClick={this.gnHandler}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Message
