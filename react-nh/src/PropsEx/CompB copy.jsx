import React from 'react'

const CompB = (props) => {
    return (
        <div>
            <h3>Component B</h3>
            <pre>{JSON.stringify(props)}</pre>
            <h3>Employee Id: {props.eid}</h3>
            <h4>Employee Name:{props.ename}</h4>
        </div>
    )
}

export default CompB
