import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2 className='fw-bold'>WELCOME TO  FOOD HUB WEBSITE  </h2>
            <p className='fw-semibold'>What are your favorite recipes?</p>
            <p className='fw-semibold'>What are your favorite chef?</p>
            <p className='fw-semibold'>What are your favorite each recipes details ?</p>
            <p>Go Back To  <Link to="/register">Register</Link></p>

        </Container>
    );
};

export default Terms;