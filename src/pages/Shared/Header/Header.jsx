import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Container>
          <Navbar.Brand href="#home">FoodHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
             <Link className='text-decoration-none fw-bold text-white' to="/">Home</Link>

             <Link className='text-decoration-none fw-bold ms-5 text-white' to="/blog" >Blog </Link>

            </Nav>
         
            <Nav>
              {
                user && 

                  <FaUserCircle style={{ fontSize: '2rem' }} />
             
                 }
  
                {user ?
                  <Button onClick={handleLogOut} variant="outline-primary">Log Out</Button> :
                  <Link to="/login"><Button variant="outline-primary"className='me-3 fw-bold text-white' >Login</Button></Link>

                }
               <Link to="/register"><Button variant="outline-primary" className='fw-bold text-white'>Registration</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </Container>
  );
};

export default Header;