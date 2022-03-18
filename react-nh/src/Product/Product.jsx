import React, { Component } from 'react'

class Product extends Component {
    state = {
        product: {
            name: "APPLE iPhone 12 (White, 128 GB)",
            price: 42000,
            image: "https://rukminim2.flixcart.com/image/224/224/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dhe5aeyhk.jpeg?q=90",
            qty: 1
        }

    }
    incrHandler = () => {
        this.setState({
            product: { ...this.state.product, qty: this.state.product.qty + 1 }
        })
    }
    decrHandler = () => {
        this.setState({ product: { ...this.state.product, qty: this.state.product.qty - 1 } })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-primary">
                                <tr>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>QTY</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product.name}</td>
                                    <td><img src={this.state.product.image} height="80px" /></td>
                                    <td>{this.state.product.price}</td>
                                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>
                                        {this.state.product.qty}
                                        <i className="fa fa-plus-circle" onClick={this.incrHandler}></i>
                                    </td>
                                    <td>{this.state.product.price * this.state.product.qty}</td>
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
