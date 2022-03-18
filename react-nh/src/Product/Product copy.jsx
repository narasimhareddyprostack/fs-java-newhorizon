import React, { Component } from 'react'

class Product extends Component {
    state = {
        product_Name: "APPLE iPhone 12 (White, 128 GB)",
        price: 42000,
        image: "https://rukminim2.flixcart.com/image/224/224/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dhe5aeyhk.jpeg?q=90",
        qty: 1
    }
    incrHandler = () => {
        this.setState({ qty: this.state.qty + 1 })
    }
    decrHandler = () => {
        this.setState({ qty: this.state.qty - 1 })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-primary"> <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total Price</th>
                            </tr></thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td><img src={this.state.image} height="80px" /></td>
                                    <td>{this.state.price}</td>
                                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                        {this.state.qty}
                                        <i className="fa fa-plus-circle" onClick={this.incrHandler}></i>
                                    </td>
                                    <td>{this.state.price * this.state.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
