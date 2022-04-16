import React, { useState } from "react";
//import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";
import axios from "axios";
import OnlyPropInfo from './OnlyPropInfo'


// DATE PICKER COMPONENT
function Search({hidePopup}) {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  
  const[location , setlocation]=useState('');
  const[guestcategory , setguestcategory]=useState('');
  const[persons , setpersons]=useState([]);
  const[property , setProperty]=useState([]);
  


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

   

    
 
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const searchClicked = () => {
    if (guestcategory && location && persons) {
      axios
        .post("http://localhost:6066/getSearchProperty", {
          location,
          persons,
          guestcategory,
        })
        .then((res) => {
          console.log(res.data);
          setProperty(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Invalid Data");
    }
  };

  const proplist = property.length < 0 ? "<h3> There are no property to show </h3>":
     property.map((prop) => {
    return (
      <div className="container">
        <OnlyPropInfo prop={prop} />
       
      </div>
    );
  });

  const validate = () => { 
  
    if(guestcategory && location && persons){
      axios
      .post("http://localhost:6066/getSearchProperty", {
        location,
        persons,
        guestcategory,
      })
      .then((res) => {
        console.log(res.data);
        setProperty(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      return true;
    }

   else {
     alert("Please Enter All Details");
     return false;
   }
  
  
  }

  return (
    <>
      <div className="container">
        <div className="align-items-center col-md-10 shadow-lg p-3 mb-5 bg-white rounded">
          <div className="row">
            <div className="col-md-4">
            
             <p>
            <input type="text" placeholder='Enter Location' className='form-control'
             value={location} onChange={(e)=>{setlocation(e.target.value)}}
             />
            
             </p>
             <p>
            
            <input type="text" placeholder='Enter No of Persons' className='form-control'
             value={persons} onChange={(e)=>{setpersons(e.target.value)}}
             />
             
            </p>
            <p>
              <select onChange={(e) => {setguestcategory(e.target.value)}}>
                  <option>Guest Category</option>
                  <option value='Family'>Family</option>
                  <option value='Couple'>Couple</option>
                  <option value='Bachelor Boys'>Bachelor Boys</option>
                  <option value='Bachelor Girls'>Bachelor Girls</option>
                  <option value='All'>All</option>
              </select>
            </p>
              <Button class='btn btn-info' onClick={() => validate()}>
                Search Travel-Inn
              </Button>
              
            </div>
            <div className="col-md-4">
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
              />
            </div>
            
          </div>
          <hr />
           {proplist}
            
           <button className='align-self-center btn btn-info text-center mt-3' onClick={hidePopup} variant='outlined'>Close</button>
        </div>
      </div>
      
    </>
  );
}

export default Search;
