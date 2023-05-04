import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
  const { user , logOut } = useContext(AuthContext)
  const handleLogOut =()=>{
     logOut()

     .then(result=>{
      console.log(result.user)
     })
     .catch(error =>{
      console.log(error)
     })
  }
  return (
    <Container className='mt-4'>
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
             <Link to="/" >Home</Link>
             <Link to="/blog" >Blog </Link>
            </Nav>
         
            <Nav>
              {
                user && 

                  <FaUserCircle style={{ fontSize: '2rem' }} />
             
                 }
  
                {user ?
                  <Button onClick={handleLogOut} variant="primary">Log Out</Button> :
                  <Link to="/login"><Button variant="primary">Login</Button></Link>

                }
               <Link to="/register"><Button variant="primary">Registration</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Container>
  );
};

export default Header;