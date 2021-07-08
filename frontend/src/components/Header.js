import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
 return (
  <header>
   <Navbar
    className='py-3'
    bg='primary'
    variant='dark'
    expand='lg'
    collapseOnSelect>
    <Container>
     <LinkContainer to='/' className='navbar-brand'>
      <Navbar.Brand>Frontend Bootcamp</Navbar.Brand>
     </LinkContainer>

     <Navbar.Toggle aria-controls='basic-navbar-nav' />
     <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ms-auto'>
       <LinkContainer to='/learn'>
        <Nav.Link>What You'll Learn</Nav.Link>
       </LinkContainer>

       <LinkContainer to='/questions'>
        <Nav.Link>Questions</Nav.Link>
       </LinkContainer>

       <LinkContainer to='/instructors'>
        <Nav.Link>Instructors</Nav.Link>
       </LinkContainer>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </header>
 );
};

export default Header;
