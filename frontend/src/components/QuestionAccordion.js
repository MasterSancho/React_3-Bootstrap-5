import React from 'react';
import { Container, Accordion, Card, Button, Row } from 'react-bootstrap';

const QuestionAccordion = () => {
 return (
  <div id='questions' className='bg-light p-5'>
   <Container className='pt-3'>
    <h2 className='text-center  mb-4'>Frequently Asked Questions</h2>

    <Accordion className='pb-5'>
     <Card>
      <Card.Header className='bg-dark'>
       <Row>
        <Accordion.Toggle as={Button} variant='dark' eventKey='0'>
         Where exactly are you located?
        </Accordion.Toggle>
       </Row>
      </Card.Header>
      <Accordion.Collapse eventKey='0'>
       <Card.Body className='text-dark'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ab,
        quo ad temporibus eum consequatur tempora quia illum quas fugit veniam,
        hic debitis magnam voluptate perferendis illo error. Blanditiis, quam!
       </Card.Body>
      </Accordion.Collapse>
     </Card>

     <Card>
      <Card.Header className='bg-dark'>
       <Row>
        <Accordion.Toggle as={Button} variant='dark' eventKey='1'>
         How much does it cost to attend?
        </Accordion.Toggle>
       </Row>
      </Card.Header>
      <Accordion.Collapse eventKey='1'>
       <Card.Body className='text-dark'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ab,
        quo ad temporibus eum consequatur tempora quia illum quas fugit veniam,
        hic debitis magnam voluptate perferendis illo error. Blanditiis, quam!
       </Card.Body>
      </Accordion.Collapse>
     </Card>

     <Card>
      <Card.Header className='bg-dark'>
       <Row>
        <Accordion.Toggle as={Button} variant='dark' eventKey='2'>
         What do I need to Know?
        </Accordion.Toggle>
       </Row>
      </Card.Header>
      <Accordion.Collapse eventKey='2'>
       <Card.Body className='text-dark'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ab,
        quo ad temporibus eum consequatur tempora quia illum quas fugit veniam,
        hic debitis magnam voluptate perferendis illo error. Blanditiis, quam!
       </Card.Body>
      </Accordion.Collapse>
     </Card>

     <Card>
      <Card.Header className='bg-dark'>
       <Row>
        <Accordion.Toggle as={Button} variant='dark' eventKey='3'>
         How Do I sign up?
        </Accordion.Toggle>
       </Row>
      </Card.Header>
      <Accordion.Collapse eventKey='3'>
       <Card.Body className='text-dark'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ab,
        quo ad temporibus eum consequatur tempora quia illum quas fugit veniam,
        hic debitis magnam voluptate perferendis illo error. Blanditiis, quam!
       </Card.Body>
      </Accordion.Collapse>
     </Card>

     <Card>
      <Card.Header className='bg-dark'>
       <Row>
        <Accordion.Toggle as={Button} variant='dark' eventKey='4'>
         Do you help me find a job?
        </Accordion.Toggle>
       </Row>
      </Card.Header>
      <Accordion.Collapse eventKey='4'>
       <Card.Body className='text-dark'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis ab,
        quo ad temporibus eum consequatur tempora quia illum quas fugit veniam,
        hic debitis magnam voluptate perferendis illo error. Blanditiis, quam!
       </Card.Body>
      </Accordion.Collapse>
     </Card>
    </Accordion>
   </Container>
  </div>
 );
};

export default QuestionAccordion;
