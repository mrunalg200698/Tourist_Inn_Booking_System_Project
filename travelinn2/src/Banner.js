import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    const props_hidePopup = () =>{
        setShowSearch(!showSearch)
    }

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search hidePopup = {props_hidePopup} />}

                <Button onClick={() => setShowSearch(!showSearch)} class='btn btn-white' variant='outlined'>
                    {showSearch ? "": <h3 className='text-success fw-bolder'><i>Search Affordable Places For Holiday Stays</i></h3>}
                </Button>
                
            </div>
            <div className='banner__info'>
                <h5 className='text-success'>Get out for a memorable affordable holiday</h5>
                <h6>
                    Plan a different kind of getaway to uncover the hidden boarding houses, villas, resorts, appartments specially suited for you.
                </h6>
                <Button className='text-center text-success' onClick={() => history.push('/searchAll')} variant='outlined'>Explore Holiday Homes</Button>
            </div>
        </div>
    )
}

export default Banner
