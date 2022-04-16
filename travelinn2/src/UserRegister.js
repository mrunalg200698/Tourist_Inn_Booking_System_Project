import React, { useState } from "react";
import './UserRegister.css';
import axios from "axios"
import { useHistory } from "react-router-dom"

const UserRegister = () => {
    const history = useHistory()
    const [ user, setUser] = useState({
         ownerType:"User",
        name: "",
        email:"",
        mobile:"",
        password:"",
        cpassword: ""
    })

    const handleRegisterClick = e => {
       
         const {name, value} = e.target;
          setUser( {
              ...user,
              [name] :value
           });
    }

    const register = () => {
        const { userType,name, email, password, cpassword } = user
        if( name && email && password && (password === cpassword)){
            axios.post("http://localhost:6066/register", user)
            .then( res => {
                alert(res.data.message)
                history.push('/login')
            })
        } else {
            alert("Invlid Credentials")
        }
        
    }
  return (
    

   

    <div className="user_register">
      <div className="row justify-content-center">
        <div className="col-md-5 text-center shadow-lg p-3 mb-5 bg-white rounded">
          <h3 class="text-success">User Registration</h3>
           {console.log("User", user)}
          <p>
            <input              
              type="text"
              name='name'
              id='name'
              value={user.name}
              placeholder="Enter Name"
              className="form-control"
              onChange={handleRegisterClick}
            />
          </p>
          <p>
            <input
              type="email"            
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
              type="number"
              name='mobile'
              id='mobile'
              value={user.mobile}
              placeholder="Enter Mobile"
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
            <input
              type="text"
              name='cpassword'
              id='cpassword'
              valur={user.cpassword}
              placeholder="Confirm Password"
              className="form-control"
              onChange={handleRegisterClick}
            />
          </p>
          <p>
            <button className="btn btn-success" onClick={register}>Register</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
