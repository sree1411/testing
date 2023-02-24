import React from 'react';
import AddUser1 from './AddUser1';
import AddUser2 from './AddUser2';
import Adduser3 from './Adduser3';
import Adduser4 from './Adduser4';



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CreatingGrid() {
  return (
    <div> 


<Container>
       
      <Row>
        <Col xs={12} md={3}>
          <AddUser1/>
        </Col>
        <Col xs={12} md={3}>
        <AddUser2/>
        </Col>
        <Col xs={12} md={3}>
        <Adduser3/>
        </Col>
        <Col xs={12} md={3}>
        <Adduser4/>
        </Col>
    </Row>

    
       
    </Container>








    </div>
  )
}
