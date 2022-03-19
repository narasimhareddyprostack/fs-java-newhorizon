import React from 'react'
import Navbar from './Navbar/Navbar'
import Employee from './EmployeeList/Employee'
import Login from './FormHandling/Login'
import Product from './Product/Product'
import Message from './Message/Message'
import User from './User/User'
import UserImages from './User/UserImages'
import Clock from './Digital/Clock'
import ContactApp from './ContactApp/ContactApp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contacts" element={<ContactApp />} />
                    <Route path="/cycle" element={<Clock />} />
                    <Route path="/images" element={<UserImages />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/employee" element={<Employee />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/message" element={<Message />} />
                </Routes>
            </Router>

        </>
    }
}
export default App
