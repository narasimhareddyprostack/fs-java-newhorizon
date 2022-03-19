import React, { Component } from 'react'

export class ContactList extends Component {
    render() {
        return (
            <div>
                <h1>Contact List</h1>
                <pre>{JSON.stringify(this.props.contactsData)}</pre>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.contactsData.map((contact) => {
                                            return <tr>
                                                <td>{contact.login.uuid.substring(32, 36)}</td>
                                                <td>{contact.name.first}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.dob.age}</td>
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

export default ContactList
