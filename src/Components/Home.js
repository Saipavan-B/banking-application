import React from "react";
import {useNavigate} from 'react-router-dom'

const Home=()=>{
    const navigate =useNavigate(null)

const login=()=>{
    navigate('/login')
}

const signup=()=>{
    navigate('/signup')
}

    return(
        <div className="container">
            <div className="row">
                <div className="col-6 bg-info">
                    <h3>Pavan</h3>
                    <h3>7896541230</h3>
                    <h3>pavan@gmail.com</h3>
                </div>
                <div className="col-4">
                    <img src={require('./BankApp.jpg')} alt="My-Image" className="img-thumbnail"/>
                    <button className="btn btn-primary" onClick={login}>Login</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-success" onClick={signup}>Signup</button>
                </div>
            </div>
        </div>
    )
}
export default Home