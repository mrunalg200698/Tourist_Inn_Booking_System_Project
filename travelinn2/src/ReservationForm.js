import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Main() {


   const[username , setusername]=useState('')
   const[email , setemail]=useState('')
   const[password , setpassword]=useState('')
   const[mobile , setmobile]=useState('')
   const[noofdays , setnoofdays]=useState('')
   


   const[eusername , seteusername]=useState('')
   const[epassword , setepassword]=useState('')
   const[eemail , seteemail]=useState('')
   const[ecpassword , setecpassword]=useState('')
   const[emobile , setemobile]=useState('')

   const[ucolor , setucolor]=useState('')
   const[ecolor , setecolr]=useState('')
   const[pcolor , setpcolor]=useState('')
   const[mcolor , setmcolor]=useState('')




   function validate()
   {

       alert('RESERVATION CONFIRMED')
    
       if(username.length > 8)
       {
           seteusername('')
           setucolor('green')
       }
       else{
           seteusername('Username must contain atleast 8 characters.')
           setucolor('red')
       }
       if(username.length > 11)
       {
           setemobile('')
           setmcolor('green')
       }
       else{
           setemobile('Mobile Number should be 10 digits long.')
           setmcolor('red')
       }


       if(email.includes('@gmail'))
       {
           seteemail('')
           setecolr('green')
       }
       else{
           setecolr('red')
           seteemail('Email should have @gmail')
       }

       if(password.length >8 && password.includes('#'))
       {
           setepassword('')
           setpcolor('green')
       }
       else{
           setepassword('Password should contain atleast 8 character and should have #  ')
           setpcolor('red')
       }

     
        

   }



    return (
        <div>
            
            <div className="row justify-content-center">

                 <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">

                     <h3>Reservation Form</h3>

                     <input type="text" placeholder='User Name' className='form-control' style={{borderColor:ucolor}}
                     value={username} onChange={(e)=>{setusername(e.target.value)}}
                     />
                     <p>{eusername}</p>
                     
                     <input type="text" placeholder='E-Mail' className='form-control' style={{borderColor:ecolor}}
                     value={email} onChange={(e)=>{setemail(e.target.value)}}
                     />

<p>{eemail}</p>
    <p>
    <input type="text" placeholder='mobile' className='form-control' style={{borderColor:pcolor}}
                     value={mobile} onChange={(e)=>{setmobile(e.target.value)}}
                     />
    </p>
    <p>
                        <input type="number" placeholder='No of Days' className='form-control' style={{borderColor:ecolor}}
                     value={noofdays} onChange={(e)=>{setnoofdays(e.target.value)}}
                     />

</p>              

                     

                     

                     <p>
                     <select
                 className="form-control"                  
                >
                  <option> Guest Category</option>
                  <option value='Family'>Family</option>
                <option value='Couple'>Couple</option>
                  <option value='Bachelor Boys'>Bachelor Boys</option>
                  <option value='Bachelor Girls'>Bachelor Girls</option>
                  <option value='All'>All</option>
                </select>
                     </p>

                    <Link to="/confirmation">
                     <button className='btn btn-success' onClick={validate}>SUBMIT</button>
                     </Link>

                 </div>

            </div>

        </div>
    )
}
