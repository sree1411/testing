import React from 'react';
import AddUser5 from './AddUser5';
import AddUser6 from './AddUser6';
import Adduser7 from './AddUser7';
 




import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ClinentsPage() {
  return (
    <div> 

 <div className='mainpart9'> 
<Container>
       
      <Row>
        <Col xs={12} md={4}>
          <AddUser5/>
        </Col>
        <Col xs={12} md={4}>
        <AddUser6/>
        </Col>
        <Col xs={12} md={4}>
        <Adduser7/>
        </Col>
         
       
    </Row>

   
    </Container>

    </div>






    </div>
  )
}
