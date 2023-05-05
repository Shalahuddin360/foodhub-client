import React from 'react';
import errorPage from '../../../assets/error.jpeg'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <Container className='w-full mt-5 mb-4 mx-auto'>
            <Row xs={1} md={2} className="g-4 d-flex align-items-lg-center">
                <Card>

                    <Card.Body>
                        <Card.Img className='object-fit-cover  rounded' variant="top" src={errorPage} />
                        <Card.Title></Card.Title>
                       
                    </Card.Body>
                </Card>
                 <div>
                    <h2>Error 404
                        No route matches URL</h2>
                        <Link to="/"><Button variant="secondary" size="lg">
                            Back To HomePage
                        </Button></Link>
                </div>

            </Row>

        </Container>
    );
};

export default ErrorPage;