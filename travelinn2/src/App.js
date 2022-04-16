import React, {useState} from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'

import Footer from './Footer'
import SearchPage from './SearchPage'
import OwnerRegister from './OwnerRegister';
import UserRegister from './UserRegister';
import Login from './Login';
import Logout from './Logout';
import Dashboard from './Dashboard';
import UserLogin from './UserLogin';
import Confirmation from './Confirmation';
import FormValidation from './FormValidation';
import SearchAll from './SearchAll';
import ReservationForm from './ReservationForm';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //const [ user, setLoginUser] = useState({})
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          
          <Route path="/ownerregister"><OwnerRegister /></Route>
          <Route path="/userregister"><UserRegister /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/logout"><Logout /></Route>      
          <Route path="/dashboard"><Dashboard/></Route>
          <Route path="/confirmation"><Confirmation /></Route>
          <Route path="/formvalidation"><FormValidation /></Route>
          <Route path="/searchAll"><SearchAll /></Route>
          <Route path="/reservationForm"><ReservationForm /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
