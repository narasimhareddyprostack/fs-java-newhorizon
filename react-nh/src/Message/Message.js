import React from 'react'
class Message extends React.Component {
    message = "Good Morning"
    emp = { id: 101, name: "Rahul Gandhi", salary: 45000 }

    render() {
        return <>
            <h1>{this.message}</h1>
            <h2>    Employee Id: {this.emp.id}</h2>
            <h3> Employee Name:{this.emp.name} </h3>
            <h3>Employee Salary:{this.emp.salary}</h3>
        </>
    }
}
export default Message