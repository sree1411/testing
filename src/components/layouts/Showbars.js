
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Showbars() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div>
        
      <Carousel activeIndex={index} onSelect={handleSelect} className="mainpart8">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="H6.webp"
          alt="First slide"
        />
        <Carousel.Caption className='onepart'>
          <h3 className='main'>DREAM-HOUSE</h3>
          <p className='main1'>Welcome to the Dream House</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="H2.jfif"
          alt="Second slide"
        />

        <Carousel.Caption className='onepart'>
          <h3 className='main'>DREAM-HOUSE</h3>
          <p className='main1' >Welcome to the Dream House</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="H4.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption className='onepart'>
          <h3 className='main'>DREAM-HOUSE</h3>
          <p className='main1'>Welcome to the Dream House </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </div>
  )
}
