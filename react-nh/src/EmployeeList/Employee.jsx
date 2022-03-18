import React, { Component } from 'react'
import { employees } from './Data'
class Employee extends Component {

    render() {
        return (
            <div>
                <pre>{JSON.stringify(employees)}</pre>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table table-hover">
                                <thead className="bg-warning">
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Gender</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employees.map((employee) => {
                                            return <tr key={employee.id}>
                                                <td>{employee.id}</td>
                                                <td>{employee.name.toLocaleUpperCase()}</td>
                                                <td>{employee.email}</td>
                                                <td>{employee.gender}</td>
                                            </tr>
                                        })

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employee
