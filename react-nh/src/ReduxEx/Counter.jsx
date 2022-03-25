import React from 'react'
import { incrAction, decrAction } from '../redux/product/product.action'
import { useDispatch, useSelector } from 'react-redux';
let Counter = () => {
    let product = useSelector((state) => {
        return state.product
    })
    let dispatch = useDispatch();
    let incrHandler = () => {
        dispatch(incrAction())
    }
    let decrHandler = () => {
        dispatch(decrAction())
    }
    return <div className="container mt-5">
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
                            <td>{product.name}</td>
                            <td><img src={product.image} height="80px" /></td>
                            <td>{product.price}</td>
                            <td><i className="fa fa-minus-circle" onClick={decrHandler}></i>
                                {product.qty}
                                <i className="fa fa-plus-circle" onClick={incrHandler}></i>
                            </td>
                            <td>{product.price * product.qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default Counter