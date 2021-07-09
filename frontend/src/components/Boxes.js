import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Laptop, PersonSquare, People } from 'react-bootstrap-icons';

const Boxes = () => {
 return (
  <div className='p-5 bg-light'>
   <Container>
    <Row className='text-center'>
     <Col md>
      <Card className='bg-dark text-light'>
       <Card.Body className='text-center'>
        <Laptop size={50} className='mb-3' />
        <Card.Title className='mb-3'>Virtual</Card.Title>
        <Card.Text>
         Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
         consectetur, adipisci velit est qui dolorem ipsum quia...
        </Card.Text>
        <LinkContainer to='#'>
         <Button type='button' className='btn-primary'>
          Read Mory
         </Button>
        </LinkContainer>
       </Card.Body>
      </Card>
     </Col>

     <Col md>
      <Card className='bg-warning text-dark'>
       <Card.Body className='text-center'>
        <PersonSquare size={50} className='mb-3' />
        <Card.Title className='mb-3'>Hybrid</Card.Title>
        <Card.Text>
         Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
         consectetur, adipisci velit est qui dolorem ipsum quia...
        </Card.Text>
        <LinkContainer to='#'>
         <Button type='button' className='btn-primary'>
          Read Mory
         </Button>
        </LinkContainer>
       </Card.Body>
      </Card>
     </Col>

     <Col md>
      <Card className='bg-dark text-light'>
       <Card.Body className='text-center'>
        <People size={50} className='mb-3' />
        <Card.Title className='mb-3'>In Person</Card.Title>
        <Card.Text>
         Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
         consectetur, adipisci velit est qui dolorem ipsum quia...
        </Card.Text>
        <LinkContainer to='#'>
         <Button type='button' className='btn-primary'>
          Read Mory
         </Button>
        </LinkContainer>
       </Card.Body>
      </Card>
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default Boxes;
