import React, { Component } from 'react'

export class Salary extends Component {
    state = {
        salary: 50000
    }
    updateSalary = (value) => {
        this.setState({
            salary: 50000 + value
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Employee Salary:{this.state.salary}</h4>
                            </div>
                            <div className="card-body">
                                <button className="btn btn-success mr-5" onClick={this.updateSalary.bind(this, 30000)}>Hike 30k</button>
                                <button className="btn btn-primary mr-5" onClick={this.updateSalary.bind(this, 10000)}>Hike 10k</button>
                                <button className="btn btn-warning" onClick={this.updateSalary.bind(this, 0)}>Hike 0k</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Salary

