import React from 'react';
import {
 Container,
 Row,
 Col,
 Image,
 InputGroup,
 FormControl,
 Button,
} from 'react-bootstrap';

const Newsletter = () => {
 return (
  <div className='bg-primary'>
   <Container className='p-5'>
    <Row className='justify-content-between align-items-center'>
     <Col md={6}>
      <h3 className='mb-3 text-light'>Sign Up For Our Newsletter</h3>
     </Col>

     <Col md={6}>
      <InputGroup>
       <FormControl placeholder='Enter Email' />
       <Button
        type='button'
        variant='outline-dark'
        className='btn-lg text-light'>
        Send
       </Button>
      </InputGroup>
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default Newsletter;
