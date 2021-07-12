import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Twitter, Facebook, Linkedin, Instagram } from 'react-bootstrap-icons';

const Instructors = () => {
 return (
  <div className='p-5 bg-primary'>
   <Container>
    <h2 className='text-center text-white'>Our Instructors</h2>
    <p className='lead text-center text-white mb-5'>
     Our instructors all have 5+ years working as a web developer in the
     industry
    </p>

    <Row className='g-4'>
     <Col md={6} lg={3}>
      <Card bg='light'>
       <Card.Body className='text-center'>
        <Card.Img
         src='https://randomuser.me/api/portraits/men/11.jpg'
         className='rounded-circle mb-3'
         alt=''
        />

        <Card.Title className='text-dark mb-3'>John Doe</Card.Title>

        <Card.Text className='text-dark'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
         enim voluptate nihil totam quos perspiciatis!
        </Card.Text>

        <Card.Link href='#' className='text-dark'>
         <Twitter />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Facebook />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Linkedin />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Instagram />
        </Card.Link>
       </Card.Body>
      </Card>
     </Col>

     <Col md={6} lg={3}>
      <Card bg='light'>
       <Card.Body className='text-center'>
        <Card.Img
         src='https://randomuser.me/api/portraits/women/11.jpg'
         className='rounded-circle mb-3'
         alt=''
        />

        <Card.Title className='text-dark mb-3'>Jane Doe</Card.Title>

        <Card.Text className='text-dark'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
         enim voluptate nihil totam quos perspiciatis!
        </Card.Text>

        <Card.Link href='#' className='text-dark'>
         <Twitter />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Facebook />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Linkedin />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Instagram />
        </Card.Link>
       </Card.Body>
      </Card>
     </Col>

     <Col md={6} lg={3}>
      <Card bg='light'>
       <Card.Body className='text-center'>
        <Card.Img
         src='https://randomuser.me/api/portraits/men/12.jpg'
         className='rounded-circle mb-3'
         alt=''
        />

        <Card.Title className='text-dark mb-3'>Steve Smith</Card.Title>

        <Card.Text className='text-dark'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
         enim voluptate nihil totam quos perspiciatis!
        </Card.Text>

        <Card.Link href='#' className='text-dark'>
         <Twitter />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Facebook />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Linkedin />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Instagram />
        </Card.Link>
       </Card.Body>
      </Card>
     </Col>

     <Col md={6} lg={3}>
      <Card bg='light'>
       <Card.Body className='text-center'>
        <Card.Img
         src='https://randomuser.me/api/portraits/women/12.jpg'
         className='rounded-circle mb-3'
         alt=''
        />

        <Card.Title className='text-dark mb-3'>Sara Smith</Card.Title>

        <Card.Text className='text-dark'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
         enim voluptate nihil totam quos perspiciatis!
        </Card.Text>

        <Card.Link href='#' className='text-dark'>
         <Twitter />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Facebook />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Linkedin />
        </Card.Link>

        <Card.Link href='#' className='text-dark'>
         <Instagram />
        </Card.Link>
       </Card.Body>
      </Card>
     </Col>
    </Row>
   </Container>
  </div>
 );
};

export default Instructors;
