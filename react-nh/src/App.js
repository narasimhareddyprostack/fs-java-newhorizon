import React from 'react'
import Navbar from './Navbar/Navbar'
import Employee from './EmployeeList/Employee'
import Login from './FormHandling/Login'
import Product from './Product/Product'
import Message from './Message/Message'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
class App extends React.Component {
    render() {
        return <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/employee" component={Employee} />
                    <Route path="/login" component={Login} />
                    <Route path="/product" component={Product} />
                    <Route path="/message" component={Message} />
                </Switch>
            </Router>

        </>
    }
}
export default App
