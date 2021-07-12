import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const ContactMap = () => {
 return (
  <div className='p-5 bg-light'>
   <Container>
    <Row className='g-4'>
     <Col md>
      <h2 className='text-center mb-4'>Contact Info</h2>

      <ListGroup>
       <ListGroup.Item className='lead'>
        <span className='fw-bold'>Main Location:</span> 50 Main st Boston MA
       </ListGroup.Item>

       <ListGroup.Item className='lead'>
        <span className='fw-bold'>Enrollment Phone:</span> (555) 555-5555
       </ListGroup.Item>

       <ListGroup.Item className='lead'>
        <span className='fw-bold'>Student Phone:</span> (333) 333-3333
       </ListGroup.Item>

       <ListGroup.Item className='lead'>
        <span className='fw-bold'>Enrollment Email:</span>{' '}
        enroll@frontendbc.test
       </ListGroup.Item>
      </ListGroup>
     </Col>

     <Col md>
      <div></div>
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default ContactMap;
