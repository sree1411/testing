import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function OurProjects() {
  return (
    <div>
        

     <div >
        <Card style={{ width: '50%' }} className="text-center , mainpart" >
        <Card.Body>
        <Card.Title >Our Projects</Card.Title>
        <Card.Text>
          Below some of the Projects
        </Card.Text>
        <Button variant="primary">Check Below Projects</Button>
      </Card.Body>
     </Card>

     </div>

    </div>
  )
}
