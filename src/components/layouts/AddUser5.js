import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaWhatsappSquare, FaFacebookSquare, FaInstagramSquare ,FaRocketchat, FaMobile } from "react-icons/fa";


export default function AddUser5() {
  return (
    <div>  
    <Card style={{ width: '99%' }} className="mainpart3">
    <Card.Img variant="top" src="profile5.jpg" />
    <Card.Body>
      <Card.Title> <p> Name: Lincon </p>
                  <p> Role: Civil Engineer </p>
                  <p> Experience: 35 Yrs  </p>
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