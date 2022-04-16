import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
//import Carousel from 'react-bootstrap/Carousel';
// ES7 snippets to do 'rfce'
import { Link } from "react-router-dom"


function Home() {
  
    return (
      
        <div className='home'>
            <Banner />
            

            <div className='home__section'>
            <Card
                src="images/prop.jpeg"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="images/prop_one.jpeg"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="images/prop_three.jpeg"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
            <div className='home__section' >
             
            <Card
                src="images/1.jpeg"
                title="2 Bedroom Flat on rent in Mussoorie"
                description="Superhost with a stunning view of the beachside in Sunny Mussoorie."
                price="Rs.1200/- night"
            />
            <Card
                src="images/2.jpeg"
                title="Sharedhouse rooms in Ooty"
                description="Enjoy the amazing sights of Ooty with this stunning budget friendly rooms."
                price="Rs.700/- night"
            />
            <Card
                src="images/3.jpeg"
                title="2 BHK shared rooms in Mumbai"
                description="Superhost with great amenities and a fabulous food and shopping mall nearby."
                price="Rs.800/- night"
            />
            </div>
            <Link to={'/searchAll'}>
            <div className='home__section'>
            
            <Card
                src="images/p1.jpeg"
                title="Kalika Bhavan,Pachmarhi"
                description="Stunning view of mountains in Pachmarhi"
                price="Rs.800/- night"  
            />
            
            <Card
                src="images/p2.jpeg"
                title="Shree Niketan,Pachmarhi"
                description="See facing balcony room, well suited for Couples."
                price="Rs.700/- night"
            />
            
            <Card
                src="images/p4.jpeg"
                title="Devalay,Chapru Nagar,Chikhaldhara"
                description="Stay by the seaside house witnessing beautiful views, preferrable for family."
                price="Rs.700/- night"
            />
            
            <Card
                src="images/p7.jpeg"
                title="Laxmi Niwas,Near Link road,Pachmarhi"
                description="Stay by beachside house witnessing beautiful views, preferrable for family."
                price="Rs.800/- night"
            />
            
            </div>
            </Link>
{/* <div className='carousel'>
            <Carousel>
  <Carousel.Item>
    <img
      className="a-block w-100"
      src="images/p1.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Kalika Bhavan,Pachmarhi</h3>
      <p>Stunning view of mountains in Pachmarhi.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="a-block w-100"
      src="images/p7.jpeg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Laxmi Niwas,Near Link road,Pachmarhi</h3>
      <p>Stay by beachside house witnessing beautiful views, preferrable for family.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/p2.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Shree Niketan,Pachmarhi</h3>
      <p>See facing balcony room, well suited for Couples.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> */}










</div>


    )
}

export default Home
