import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gmAction, gnAction } from '../redux/wish/wish.action'
let Wish = () => {
    let dispatch = useDispatch();
    let wish = useSelector((state) => {
        return state.wish;
    })

    let gmHandler = () => {
        dispatch(gmAction());
    }
    let gnHandler = () => {
        dispatch(gnAction());
    }
    return <div className="container mt-5">
        <div className="row">
            <pre>{JSON.stringify(wish)}</pre>
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
<h2>Message:{wish.message}</h2>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-success mr-5" onClick={gmHandler}>GM</button>
                        <button className="btn btn-warning" onClick={gnHandler}>GN</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Wish;