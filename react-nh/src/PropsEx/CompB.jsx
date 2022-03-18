import React, { Component } from 'react'

export class CompB extends Component {
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h4>Employee Id:{this.props.eid}</h4>
                <h4>Employee Loc:{this.props.eloc[0]}</h4>
            </div>
        )
    }
}

export default CompB
