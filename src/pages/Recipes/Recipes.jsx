import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const Recipes = () => {
    const recipesAll = useLoaderData();
    const { chef_id, recipe_name, author } = recipesAll
    return (
        <Container>
            <h2 className='text-center'>Chef Details Information!!!!!!!!!</h2>

            <Row xs={1} md={1} lg={1}>

                <Col>
                    <Card className="text-center">
                        <Card.Header>
                            <Card.Img variant="top" src={author?.chefPicture} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Name : {author?.chef_name}</Card.Title>
                            <Card.Text>

                                <p className='fw-semibold'> <span className='fw-bold'>Description:</span> {author?.chef_description}</p>
                                <p className='fw-semibold'> Experience:<span className='text-warning text ms-3'>{author?.yearsOfExperience}</span> Year</p>
                                <p className='fw-semibold'>Number Of Recipes : <span className='text-warning ms-3'>{author?.numberOfRecipes}</span> </p>
                                <p className='fw-semibold'>Likes :<span className='text-warning ms-3'> {author?.likes}</span></p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">  
                        
                        <Link to={`/chef/${chef_id}`}><Button variant="primary">All recipes in this chef</Button></Link>
                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default Recipes;