import React, { useState } from 'react'
let Message = () => {
    //let msg = "Hello"
    //let [var, setVar] = useState();
    let [msg, setMessage] = useState("Hello");
    let gmHandler = () => {
        setMessage("Good Morning")
    }
    return <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1>  Message :{msg}</h1>
                        </div>
                        <div className="card-body">
                            <button onClick={gmHandler} className="btn btn-success mr-5">GM</button>
                            <button className="btn btn-primary mr-5">GA</button>
                            <button className="btn btn-warning mr-5">GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}
export default Message