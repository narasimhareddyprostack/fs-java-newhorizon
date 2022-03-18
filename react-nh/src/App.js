import React from 'react'
import Navbar from './Navbar/Navbar'
import CompA from './PropsEx/CompA'
import Message from './Message/Message'
import Counter from './PropsEx2/Counter'
import Product from './Product/Product'
import Login from './FormHandling/Login'
import Salary from './Salary/Salary'
class App extends React.Component {
    render() {
        return <>
            <Navbar />
            <Login />


        </>
    }
}
export default App
