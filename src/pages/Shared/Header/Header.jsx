import React, { useContext } from 'react';
import { Button, Card, Container, Nav, NavDropdown, NavLink, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaPray, FaUserCircle } from 'react-icons/fa';


const Header = () => {
  const { user , logOut } = useContext(AuthContext);
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

             <Link  className='text-decoration-none fw-bold ms-5 text-white' to="/blog" >Blog</Link>

            </Nav>
         
            <Nav >
              {
                user && 

                  <FaUserCircle style={{ fontSize: '2rem' }} />
             
                 }
  
                {user ?
                 <span  className='text-white'>{user?.displayName}<Card.Img variant="top"title={user?.displayName} style={{ width: '40px' }} src={user.photoURL} className='mx-4 rounded-circle' /> <Button onClick={handleLogOut} variant="outline-primary" className='mx-4' >Log Out</Button></span> :
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