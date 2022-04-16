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
               <h4 className='text-warning'>{prop.description}</h4>
           </div>
       </div>  
    <div class='row'>
        

        <div className="col">
            Locality:{prop.area}<br />
            City:{prop.city}<br />
            State:{prop.state}<br />
            Country:{prop.country}<br />            
             Guest Category:{prop.guestcategory}<br />
            Facilities:{prop.facilites}<br />
            <h5 className='text-info m-3'>Rs.{prop.price}/- per 24 hrs</h5><br />

        </div>
         
        
       

         
    </div>
    
    </td>
    </tr>
    </table>
    </p>
  )
}

export default Property