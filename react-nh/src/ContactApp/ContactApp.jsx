import React, { Component } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
export class ContactApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        let url = 'https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist'
        Axios.get(url).then((response) => {
            this.setState({ contacts: response.data })
        }).catch(() => { })
    }
    render() {
        return (
            <div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-8">
                            {
                                this.state.contacts.length > 0 ? <React.Fragment>
                                    <ContactList contactsData={this.state.contacts} />
                                </React.Fragment> : null
                            }
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactApp
