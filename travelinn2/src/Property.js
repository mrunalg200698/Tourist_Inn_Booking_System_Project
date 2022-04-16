import React from 'react'
import {Link} from 'react-router-dom'


const Property = ({prop}) => {
  return (
    <p>
         <table class='table'>
             <tr>
             <td>
       <div className="row">
           <div className="col">
               <h4 className='text-warning'>{prop.title}</h4>
           </div>
          <div>
               <h5 className='text-primary'>{prop.description}</h5>
           </div>
       </div>  
    <div class='row'>
        <div className="col-md-3">
            Name: {prop.name}<br />
            Email: {prop.email}<br />
            Mobile: {prop.mobile}<br />
            Guest Category: {prop.guestcategory}<br />
            Facilities: {prop.facilites}<br />
           
        </div>

        <div className="col-md-3">
            Locality: {prop.area}<br />
            City: {prop.city}<br />
            State: {prop.state}<br />
            Country: {prop.country}<br />
             <h5 className='text-info m-3'>Rs.{prop.price}/- per 24 hrs</h5><br />

        </div>
        <div className="col-md-3">
           
         <img src={prop.propimage} width='200' height='200' />
          

        </div>
        <div className="col-md-3 align-items-middle">
        <Link to='/reservationForm'>
        <button
                className="btn btn-lg btn-danger"                 
              >Book Now
              </button>
             
        </Link>    
       </div>
       

         
    </div>
    
    </td>
    </tr>
    </table>
    </p>
  )
}

export default Property