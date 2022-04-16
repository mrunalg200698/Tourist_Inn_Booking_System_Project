import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
    
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays · 26 august to 30 august · 2 guest</p>
                <h1>Stays nearby</h1>
                 
            </div>
            <SearchResult
                img="https://media-cdn.tripadvisor.com/media/vr-splice-j/03/6a/12/6c.jpg"
                location="Private room near Kulri Square,Mussoorie"
                title="Shivalay"
                description="2 guest · 1 bedroom · 1 bed · 1 shared bathroom · Wifi · Kitchen · Free parking "
                star={4.73}
                price="Rs. 900/- night"
                total="Rs. 6000/- total"
                 
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBrJJFwUoTLkId6kMLtWEgMfIBiK2D-qI6eC-vovsC9vEkjcVcTrXlQ523ksUF3hO2uVM&usqp=CAU"
                location="Room near Kulri Square,Mussoorie"
                title="Swarg"
                description="2 guest · 1 bedroom · 1 bed · shared bathroom · Wifi · Kitchen"
                star={4.3}
                price="Rs. 1000/- night"
                total="Rs. 6000/- total"
            />

            <SearchResult
                img="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_355/f_auto,q_auto/v1632383404/Website/CMS-Uploads/nkuonmg6wczqjrilcbqq.jpg"
                location="Patel Road,Pachmarhi"
                title="Chandrika Sadan"
                description="4 guest · 1 bedroom · 2 bed · 2 bathrooms · Free parking"
                star={3.8}
                price="Rs. 1600/- night"
                total="Rs. 6000/- total"
            />
            <SearchResult
                img="https://i.pinimg.com/originals/60/a8/5f/60a85f4549402bc02dec323be16a32c9.jpg"
                location="Forest Colony,Pachmarhi"
                title="ShantiNiketan"
                description="3 guest · 1 bedroom · 3 bed · 1 bathroom · Wifi · Kitchen · Free parking "
                star={4.1}
                price="Rs. 1600/- night"
                total="Rs. 6000/- total"
            />
    
            
        </div>
     
    )
}

export default SearchPage
