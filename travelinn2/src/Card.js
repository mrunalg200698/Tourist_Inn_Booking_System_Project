import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

function Card({ src, title, description, price,info }) {
    return (
        <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                {/* <h3>{price}</h3> */}
                <div class='text-center'>
                <h5 class='text-info'>{price}</h5>
                </div>
            </div>
             
        </div>
    )
}

export default Card
