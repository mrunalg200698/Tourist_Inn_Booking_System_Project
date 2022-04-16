import React,{useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'

const Logout = () => {
   const history = useHistory();
    useEffect(()=>{
       
             //localStorage.clear();
             localStorage.removeItem('token');
             //window.ref.location('/login');
             history.replace('/login')
            
        },[]
    )

  return (
    <div>Logout</div>
  )
}

export default Logout