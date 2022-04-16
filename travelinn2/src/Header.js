import React from 'react'
import './Header.css'
// import SearchIcon from "@material-ui/icons/Search";
// import LanguageIcon from "@material-ui/icons/Language";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (


    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="nav-link" ><h3 className='text-success'> <strong>Travel-Inn</strong></h3></Link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-25">
          <li class="nav-item">
            <Link class="nav-link" to='/'> Home </Link>
          </li>
          {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Register
              </a>
              
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
          <li class="nav-item dropdown">
            <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Register</a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <Link class="nav-link" to='/ownerregister'> Owner Registration</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/userregister'> User Registration</Link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <Link class="nav-link" to='/login'> Login</Link>
          </li>
          <li  className="nav-item">
              <Link   className="nav-link" to='/logout'> Logout</Link>  
            </li>
          <li class="nav-item">
            <Link class="nav-link" to='/'>Contact</Link>
          </li>


        </ul>

      </div>
    </nav>
  )
}

export default Header
