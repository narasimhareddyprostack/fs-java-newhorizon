import React, { useState } from 'react'
let Message = () => {
    //let msg = "Hello"
    //let [var, setVar] = useState();
    let [msg, setMessage] = useState("Hello");
    let gmHandler = () => {
        setMessage("Good Morning")
    }
    let gaHandler = () => {
        setMessage("Good Aternoon")
    }
    let gnHandler = () => {
        setMessage("Good Night")
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
                            <button onClick={gaHandler} className="btn btn-primary mr-5" >GA</button>
                            <button onClick={gnHandler} className="btn btn-warning mr-5">GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}
export default Message