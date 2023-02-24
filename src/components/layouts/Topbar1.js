import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Topbar1() {
  return (
    <div>  
        
    <Navbar bg="danger" expand="lg" className='mainpart7'>
    <Container fluid>
      <Navbar.Brand href="#">Dream House Construction</Navbar.Brand>
       
      <Nav className="ms-auto">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
          <Nav.Link href="#action1">Services</Nav.Link>
          <Nav.Link href="#action1">Contact</Nav.Link>
          <Nav.Link href="#action1">visit official site</Nav.Link>

       </Nav>
      
    </Container>
  </Navbar>
  
    </div>
  )
}
