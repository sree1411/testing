import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ServicesPage() {
  return (
    <div> 

       <Card className="text-center mainpart2">
       <Card.Header> </Card.Header>
       <Card.Body>
       <Button variant="primary">Our services</Button>
        <Card.Text>
          <p>We provide the excellent customer service to the people </p>
        
          <p> Check the our details and construction </p>
          
        </Card.Text>
        <Button variant="primary">Visit our Official website</Button>
        </Card.Body>
        <Card.Footer > </Card.Footer>
       </Card>


    </div>
  )
}
