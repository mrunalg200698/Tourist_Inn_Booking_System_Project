 import React,{useState} from 'react'
 import './OwnerRegister.css';
 import axios from "axios"
import { useHistory } from "react-router-dom"
import { LocalConvenienceStoreOutlined } from '@material-ui/icons'
 
 
 const OwnerRegister = () => {

  const history = useHistory()
  
  const [ owner, setOwner] = useState({
      userType:'owner',
      name: "",
      email:"",
      mobile:"",
      password:"",
      cpassword: "",
      area:"",
      city:"",
      state:"",
      country:"",
      pincode:"",
      guestcategory:"",
      facilites:"",
      propimage:'',
      price:'',
      description:''
  })

   const handleRegisterClick = (e) =>{
    console.log(e.target);
    const {name, value }= e.target;
    setOwner( {
      ...owner,
      [name] :value,
   });

   };

   const handleFacilitesCheck = event =>{
    console.log(event.target.value);
    let state = owner.facilites;
    state.facilites[event.target.value] = event.target.checked;
    setOwner({...owner,facilites:state})
     
   }

   

   const register = (e) => {
    const { userType,name, email, mobile, password, cpassword,city,state,country,pincode,guestcategory,propimage,price,description } = owner
    if( name && email && password && mobile && city && state && country && pincode && guestcategory && propimage && price && description){
    axios.post("http://localhost:6066/ownerregister", owner)
    .then( res => {
        alert(res.data.message)
        history.push('/searchAll')
         
    })
  } else{
    alert('Invalid Input')
  }
   };
    

     
   return (
     <div className="owner_register">
      
       <div className="row justify-content-center">
           <h3 className="text-success text-center">Owner Registration</h3>
         <div className="col-md-10 shadow-lg p-3 mb-5 bg-white rounded">
           <div className="row">
             <div className="col-md-4">
               <p>
               <input
                 type="text"
                 placeholder="Enter Name"
                 className="form-control"
                 name='name'
                 id='name'
                 value={owner.name}                 
                 onChange={handleRegisterClick}
                  
               />
               </p>
               <p> 

               <input
                 type="text"
                 placeholder="Enter Email"
                 className="form-control"
                 name='email'
                 id='email'
                 value={owner.email}
                 onChange={handleRegisterClick}
                 
               />
               </p>
               <p>
                <input
                 type="text"
                 placeholder="Enter Mobile"
                 className="form-control"
                 name='mobile'
                 id='mobile'
                 value={owner.mobile}
                 onChange={handleRegisterClick}
                  
               />
               </p>


             
               <p>
               <input
                 type="text"
                 placeholder="Enter Password"
                 className="form-control"
                 name='password'
                 id='password'
                 value={owner.password}
                 onChange={handleRegisterClick}
                  
               />
               </p>

                <p>

               <input
                 type="text"
                 placeholder="Confirm Password"
                 className="form-control"
                 name='cpassword'
                 id='cpassword'
                 value={owner.cpassword}
                 onChange={handleRegisterClick}
                  
               />
               </p>
             
             </div>
             
             <div className="col-md-4">
             <p>
               <input
                 type="text"
                 placeholder="Enter Area"
                 className="form-control"
                 name='area'
                 id='area'
                 value={owner.area}
                 onChange={handleRegisterClick}
                 
               />
              </p>
              <p>

               <input
                 type="text"
                 placeholder="Enter City"
                 className="form-control"
                 name='city'
                 id='city'
                 value={owner.city}
                 onChange={handleRegisterClick}
                
               />
               </p>

               <p>
         

               <input
                 type="text"
                 placeholder="Enter State"
                 className="form-control"
                 name='state'
                 id='state'
                 value={owner.state}
                 onChange={handleRegisterClick}
                 
               />
               </p>

               <p>

               <input
                 type="text"
                 placeholder="Enter Country"
                 className="form-control"
                 name='country'
                 id='country'
                 value={owner.country}
                 onChange={handleRegisterClick}
                
               />
                </p>
                
               <p>
               <input
                 type="text"
                 placeholder="Enter Pincode"
                 className="form-control"
                 name='pincode'
                 id='pincode'
                 value={owner.pincode}
                 onChange={handleRegisterClick}
                
               />
                </p>
               
             </div>
             <div className="col-md-4">
               
               <p>
                <select name='guestcategory' id='guest-category' class='form-control' onChange={handleRegisterClick}>
                <option value=''>Select Guest Category</option>
                <option value='Family'>Family</option>
                <option value='Couple'>Couple</option>
                  <option value='Bachelor Boys'>Bachelor Boys</option>
                  <option value='Bachelor Girls'>Bachelor Girls</option>
                  <option value='All'>All</option>
                </select>
                </p>
                <p>
                  {/* Facilities :
                  &nbsp;&nbsp;&nbsp;
               <input
                 type="checkbox"
                 name="Facilites"   
                 value='wifi'       
                 onChange={handleRegisterClick}        
                 />Wifi &nbsp;&nbsp;&nbsp;
                 <input
                 type="checkbox"
                 name="Facilites"   
                 value='parking'
                 onChange={handleRegisterClick}               
                 />Parking&nbsp;&nbsp;&nbsp;
                <input
                 type="checkbox"
                 name="Facilites"    
                 value='food'    
                 onChange={handleRegisterClick}          
                 />Food  */}
                <select
                  name="facilites"
                  id="facilites"
                  class="form-control"
                  onChange={handleRegisterClick}
                >
                  <option value="">Select Facilites</option>
                  <option value="Only Parking">Only Parking</option>
                  <option value="Only Wifi">Only Wifi</option>
                  <option value="Only Food">Only Food</option>
                  <option value="Parking / Food ">Parking / Food </option>
                  <option value="Parking / Wifi">Parking / Wifi</option>
                  <option value="Food / Wifi">Food / Wifi</option>
                  <option value="Parking ?Food / Wifi">Parking / Food / Wifi</option>
                </select>
              </p>
               
               
               <p>
               <input
                 type="text"
                 placeholder="Title"
                 className="form-control"
                 name='title'
                 id='title'
                 value={owner.title}
                 onChange={handleRegisterClick}
                
               />
                </p>
               <p>
                <textarea
                 cols='40' 
                 rows='3'
                 name='description'
                 placeholder='Enter Description'
                    id='description'
                    value={owner.description}
                    onChange={handleRegisterClick}>Descripton of the place</textarea>
               </p>
               <p>
               <input 
                   type='text'
                    className="form-control"
                    placeholder="Enter Property Image"
                    name="propimage"
                    value={owner.propimage}
                 onChange={handleRegisterClick}
                    />
               </p>
               {/* <p>
               <input 
                   type='file'
                    className="form-control"
                    placeholder="Enter Property Image"
                    name="propimage"
                    value={owner.propimage}
                    onChange={handleRegisterClick}
                    />
               </p>  */}
               <p>
               <input
                 type="text"
                 placeholder="Price"
                 className="form-control"
                 name='price'
                 id='price'
                 value={owner.price}
                 onChange={handleRegisterClick}
                
               />
               </p>
          
             </div>
           </div>
           <div className="row">
             <div className="col-md-12">
             <button className="btn btn-success" onClick={register}>Register</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 export default OwnerRegister