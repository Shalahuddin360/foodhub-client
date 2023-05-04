import React from 'react';
import errorPage from '../../../assets/error.jpg'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <Container className='w-full mt-5 mb-4'>
            <Row xs={1} md={2} className="g-4">
                <Card>

                    <Card.Body>
                        <Card.Img variant="top" src={errorPage} />
                        <Card.Title></Card.Title>
               
                    </Card.Body>
                </Card>
                <Link to="/"><Button variant="secondary" size="lg">
              Back To HomePage
                </Button></Link>
         
            </Row>

        </Container>
    );
};

export default ErrorPage;