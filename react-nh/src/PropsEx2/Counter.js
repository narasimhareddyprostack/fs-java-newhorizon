import React, { Component } from 'react'

class Counter extends Component {
    state = {
        qty: 1
    }
    incrHandler = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    decrHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }
    render() {
        return (
            <div>
                <h4>Counter :{this.state.qty}</h4>
                <button onClick={this.incrHandler}>INCR</button>
                <button onClick={this.decrHandler}>DECR</button>
            </div>
        )
    }
}

export default Counter
