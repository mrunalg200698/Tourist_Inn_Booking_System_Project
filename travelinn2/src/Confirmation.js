import React from 'react'
import {validate} from './ReservationForm'
const Confirmation = () => {
  return (
    <div><h3 className="text-center text-info">Booking Confirmed </h3> 
     <h4 className="text-center text-info">
     <p>Your booking is confirmed and details can be seen in the user dashboard</p>
     </h4>
     <div style={{ paddingBottom:200 }}></div>
    </div>
  )
}

export default Confirmation