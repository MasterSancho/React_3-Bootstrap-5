import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const Showcase = () => {
 return (
  <Container
   bg='primary'
   variant='primary'
   className='text-light p-5 text-center text-md-start'>
   <Row className='align-items-center justify-content-between'>
    <Col md={6} className='pb-3'>
     <h2>
      Become a <span className='text-success'>Web Developer</span>
     </h2>

     <p className='lead my-4'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ex beatae
      non odit!
     </p>

     <Button type='button' className='btn-lg'>
      Start The Enrollment
     </Button>
    </Col>

    <Col md={6}>
     <Image
      className='w-70 d-none d-sm-block'
      src='img/showcase.svg'
      alt='showcase'
      fluid
     />
    </Col>
   </Row>
  </Container>
 );
};

export default Showcase;
