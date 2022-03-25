import React, { useState, useEffect } from 'react'
let Message = () => {
    //let msg = "Hello"
    //let [var, setVar] = useState();
    let [msg, setMessage] = useState("Hello");
    let updateHandler = (messageValue) => {
        setMessage(messageValue)
    }
    useEffect(() => {
        console.log("second")
    }, []);
    return <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1>  Message :{msg}</h1>
                        </div>
                        <div className="card-body">
                            <button onClick={updateHandler.bind(this, "Good Morning")} className="btn btn-success mr-5">GM</button>
                            <button onClick={updateHandler.bind(this, "Good Afternoon")} className="btn btn-primary mr-5" >GA</button>
                            <button onClick={updateHandler.bind(this, "Good Night")} className="btn btn-warning mr-5">GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
}
export default Message