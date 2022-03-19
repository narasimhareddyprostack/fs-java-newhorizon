import React, { Component } from 'react'

export class ContactDetails extends Component {
    render() {
        return (
            <div>
                {/*  <h1>Contact Details</h1>
                <pre>{JSON.stringify(this.props.selectedContact)}</pre> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <img src={this.props.selectedContact.picture.large} className="ml-5" />
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <h5>{this.props.selectedContact.name.last}</h5>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>{this.props.selectedContact.email}</h5>
                                        </li>

                                        <li className="list-group-item">
                                            <h5>{this.props.selectedContact.location.country}</h5>
                                        </li>
                                        <li className="list-group-item">
                                            <h5>{this.props.selectedContact.location.postcode}</h5>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactDetails
