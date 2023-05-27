import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <div>
       <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home"> @20223 Copyright:HealthFitness</Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Footer;