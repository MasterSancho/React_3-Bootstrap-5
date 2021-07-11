import React from 'react';
import { Button, Col, Container, Image, NavLink, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ChevronRight } from 'react-bootstrap-icons';

const LearnSections = () => {
 return (
  <div className='p-5 bg-light'>
   <Container>
    <Row className='bg-dark '>
     <Col md>
      <Image src='img/fundamentals.svg' className='img-fluid' alt='' />
     </Col>

     <Col md className='p-5'>
      <h2 className='text-light'>Learn The Fundamentals</h2>
      <p className='lead'>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
       incidunt? Consectetur sint quo ipsum vel?
      </p>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum
       illo rerum? Placeat rem nihil incidunt adipisci inventore deleniti iste
       qui quae illum dolore quod, nam, explicabo aliquam ad fuga.
      </p>

      <LinkContainer to='#'>
       <Button type='button' className='btn-light'>
        <ChevronRight /> Read More
       </Button>
      </LinkContainer>
     </Col>
    </Row>

    <Row className='text-dark my-5'>
     <Col md className='p-5'>
      <h2>Learn React</h2>
      <p className='lead'>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
       incidunt? Consectetur sint quo ipsum vel?
      </p>
      <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum
       illo rerum? Placeat rem nihil incidunt adipisci inventore deleniti iste
       qui quae illum dolore quod, nam, explicabo aliquam ad fuga.
      </p>

      <LinkContainer to='#'>
       <Button type='button' className='btn-light'>
        <ChevronRight /> Read More
       </Button>
      </LinkContainer>
     </Col>

     <Col md>
      <Image src='img/react.svg' className='img-fluid' alt='' />
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default LearnSections;
