import React from 'react'
class Navbar extends React.Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a href="#" className="navbar-brand">React Complete Info</a>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Employees</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Product</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Service</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact US</a>
                    </li>
                </ul>
            </div>
        </nav>
    }
}
export default Navbar