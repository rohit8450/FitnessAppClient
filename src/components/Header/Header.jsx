import React, {Link}from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-s_Sg-vuP0FOJA01W-zyQTn0Ye6GAjWp0og&usqp=CAU"
              width="50"
              height="42"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/get-yoga-poses">YogaPoses</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
