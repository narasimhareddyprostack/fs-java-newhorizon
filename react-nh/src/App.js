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
import MessageOne from './Hooks/Message'
import Wish from './ReduxEx/Wish'
import Counter from './ReduxEx/Counter'
import { store } from './redux/store'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <>
            <Provider store={store}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/reduxex2" element={<Counter />} />
                        <Route path="/reduxex" element={<Wish />} />
                        <Route path="/data" element={<MessageOne />} />
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
            </Provider>

        </>
    }
}
export default App
