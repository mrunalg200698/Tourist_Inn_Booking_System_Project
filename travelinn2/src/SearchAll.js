import React, { useState, useEffect } from "react";
import axios from "axios";
import Property from "./Property";
import { Link,useHistory  } from 'react-router-dom'
import SearchPage from "./SearchPage"

import Header from "./Header";

const SearchAll = () => {
  const [property, setProperty] = useState([]);
  const [location, setlocation] = useState("");
  const [persons, setpersons] = useState('');
  const [guestcategory, setguestcategory] = useState("");
  const history = useHistory();

  useEffect(()=>{
    const data = localStorage.getItem('token')
    if(!data){
         //window.location.href='/login'
         localStorage.removeItem('token');
         //window.ref.location('/login');
         history.replace('/login')
        
    }
    
    
},[])

  useEffect(() => {
    axios
      .get("http://localhost:6066/allProperty")
      .then((res) => {
        // console.log(res);
        setProperty(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const proplist = property.map((prop) => {
    return (
      <div className="container">
        <Property prop={prop} />
      </div>
    );
  });

  const searchClicked = () => {
    if (guestcategory && location) {
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

  return (
    <>
       <img src='images/image_banner_searchall.jpg' width='1600' height='400'  />
      <div className="m-3">
        
      <div className="container">
        <div className="text-center col-md-12 shadow-lg p-3 mb-5 bg-white rounded">
          <div className="row align-items-center">
            <div className="col-md-3">
              <p>
                <input
                  type="text"
                  placeholder="City or Location"
                  className="form-control"
                  value={location}
                  onChange={(e) => {
                    setlocation(e.target.value);
                  }}
                />
              </p>
            </div>
             
            <div className="col-md-3">
              <p>
                <select
                 className="form-control"
                  onChange={(e) => {
                    setguestcategory(e.target.value);
                  }}
                >
                  <option> Guest Category</option>
                  <option value='Family'>Family</option>
                <option value='Couple'>Couple</option>
                  <option value='Bachelor Boys'>Bachelor Boys</option>
                  <option value='Bachelor Girls'>Bachelor Girls</option>
                  <option value='All'>All</option>
                </select>
              </p>
            </div>
            <div className="col-md-3">
              <button className="btn btn-info" onClick={searchClicked}>
                Search Travel Inn
              </button>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-warning"
                onClick={() => window.location.reload(false)}
              >
                Clear Search
              </button>
            </div>
          </div>
         
        </div>
      
      </div>
     
      </div>
      <hr />
      {proplist}

    </>
  );
};

export default SearchAll;
