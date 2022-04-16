import React, { useState } from "react";
import "./Login.css"
import axios from "axios";
import jwt from 'jsonwebtoken';
import { useHistory } from "react-router-dom"
import { Dashboard } from "./Dashboard";


const Login  = ({setLoginUser}) => {

    const history = useHistory()
    const [ user, setUser] = useState({
         
        email:"",
        password:"",
        
    })

    const handleRegisterClick = e => {
       
         const {name, value} = e.target;
         setUser({
              ...user,
              [name] :value
           });
    }
    const login = () => {
        axios.post("http://localhost:6066/login", user)
        .then(res => {
        

        if(res.data.user){
          //const myUser = jwt.decode(res.data.user)
          localStorage.setItem('token',res.data.user)
          window.location.href = '/dashboard'
          //alert(myUser.mobile+myUser.name+myUser.email+myUser.id);
        }
        else{
          alert('Login Unsuccessfull');
        }
           
            
           
        })
    }
  return (
    

   

    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 text-center shadow-lg p-3 mb-5 bg-white rounded">
          <h3 class="text-success">User Login</h3>
           {console.log("User", user)}
          
          <p>
            <input
              type="text"            
              name='email'
              id='email'
              value={user.email}
              placeholder="Enter Email"
              className="form-control"
              onChange={handleRegisterClick}
            />
          </p>
          
          <p>
            <input
              type="text"
              name='password'
              id='password'
              value={user.password}
              placeholder="Enter Password"
              className="form-control"
              onChange={handleRegisterClick}
            />
          </p>
           
          <p>
            <button className="btn btn-success" onClick={login}>Login</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
