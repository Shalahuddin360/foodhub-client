import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <Container>
            <div className='d-flex align-items-center'>
                <Button variant='danger'>Latest</Button>
                <Marquee className='text-danger' pauseOnHover={true} speed={50}>
                    I can be a React component, multiple React components, or just some text............... I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Container>
        <Navbar.Brand href="#home">FoodHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
            <Button variant="primary">Profile</Button>
            </Nav.Link>

            <Nav.Link href="#deets">
            <Button variant="primary">Login</Button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="primary">Registration</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </Container>
    );
};

export default Header;