import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AddUser4() {
  return (
    <div>  
    <Card style={{ width: '100%' }} className="mainpart12">
    <Card.Img variant="top" src="logohouse.png" />
    <Card.Body>
      <Card.Title> House-Four-Details </Card.Title>
      <Card.Text>
        <p> Home construction or residential construction is the process of constructing a house, apartment building, or similar residential building generally referred to as a 'home' when giving consideration to the people who might now or someday reside there</p>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>
  )
}
