import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare ,FaRocketchat, FaMobile } from "react-icons/fa";


export default function AddUser7() {
  return (
    <div>  
    <Card style={{ width: '99%' }} className="mainpart3">
    <Card.Img variant="top" src="profile3.jpg" />
    <Card.Body>
      <Card.Title> <p> Name: Philips </p>
                  <p> Role: Civil Engineer </p>
                  <p> Experience: 15 Yrs  </p>
                  <div>Social Media </div> {''}
                   <span> <FaWhatsappSquare/> <FaFacebookSquare/>  <FaInstagramSquare/> {''}<FaRocketchat/>
                   
                   <FaMobile/>
                   </span>
                  
      </Card.Title>
 
    </Card.Body>
  </Card>
  </div>
  )
}