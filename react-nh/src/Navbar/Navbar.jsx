import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">React List Rendering Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link to="/user" className="nav-link">User</Link></li>
                        <li className="nav-item"><Link to="/employee" className="nav-link">Employee</Link></li>
                        <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        <li className="nav-item"><Link to="/product" className="nav-link">Product</Link></li>
                        <li className="nav-item"><Link to="/message" className="nav-link">Message</Link></li>


                    </ul>
                </div>
            </nav >
        )
    }
}

export default Navbar
