import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken';
import { useHistory, Link } from 'react-router-dom'
// import "./Dashboard.css"
 

const Dashboard = () => {
    const history = useHistory()
    const [userName,setUserName] = useState([]);
    const [userEmail,setUserEmail] = useState([])
    const [userMobile,setUserMobile] = useState([])
     

    useEffect(()=>{
        const data = localStorage.getItem('token')
        if(!data){
             //window.location.href='/login'
             localStorage.removeItem('token');
             //window.ref.location('/login');
             history.replace('/login')
            
        }
        else
        {
           

            const myUser = jwt.decode(data)
            setUserName(myUser.name);
            setUserEmail(myUser.email)
            setUserMobile(myUser.mobile)
        }
        
},[])
  return (
    <div className='dashboard'>
      <>
      
    <center><h3 className='text-success fw-bolder'>User Dashboard</h3></center><hr/>
    <div className="col-md-5 mx-auto  shadow-lg p-3 mb-5 bg-whiterounded">
    <h3 className='text-center text-info'>Welcome {userName} </h3>
    <div className="row">
    
        <div className="col-md-6 text-center" > {userEmail}</div>
        <div className="col-md-6 text-center">{userMobile}</div>
  
    </div>
    </div>

    <div className="col-md-5 mx-auto shadow-lg p-3 mb-5 bg-whiterounded">
              <center><Link to='/searchAll'> <span class='btn btn-sm btn-warning'> View All Properties </span></Link></center>
    </div>
       
      <div style={{ paddingBottom:200 }}></div>
    </>
             </div>
  )
}

export default Dashboard