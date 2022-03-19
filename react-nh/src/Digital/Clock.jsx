import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        console.log("First Constructor")
        super(props);
        this.state = {
            currentTime: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ currentTime: new Date().toLocaleTimeString() })
        }, 1000)

        console.log("then, class Component Life Cycle methods will execute ie DidMount")
    }
    componentWillUnmount() {
        console.log("Final")
    }
    render() {
        console.log("Second Render")
        return (
            <div>
                <div className="container mt-5">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-info text-white">
                                    <h1>Time:{this.state.currentTime}</h1>
                                </div>
                                <div className="card-body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock
