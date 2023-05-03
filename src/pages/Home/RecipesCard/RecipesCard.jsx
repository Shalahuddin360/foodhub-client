import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const RecipesCard = ({ recipes }) => {
    // console.log(recipes)
    const { recipe_name, ingredients, methodOfCooking, rating, author } = recipes
    return (
        <Container> 
            <Row>
                <Col>
                    <Card className="">

                        <Card.Header className=' d-flex align-items-center'>
                       
                           <div className='flex-grow-1'>
                           <Image style={{height:'40px'}} src={author?.chefPicture} className='rounded-circle img-fluid'></Image>
                           </div>
                           <div>
                             <p className='ms-4 fw-bold'> {author.chef_name}</p>
                          </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='fw-bold'>Recipe Name: {recipe_name}</Card.Title>
                            <Card.Text>
                                <p className='fw-bold'>Ingredients</p>
                                <p className='fw-semibold'>{ingredients}</p>
                                <p className='fw-bold'>Method Of Cooking</p>
                                <p className='fw-semibold'>
                                    {methodOfCooking < 250 ? {methodOfCooking} : <>{methodOfCooking.slice(0,250)}.. <br /><Link to={'/recipes/${recipe_id}'}>Read More</Link></>}
                                    
                              </p>
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex">
                            <div className='flex-grow-1'>
                                <Rating className='text-warning'>
                                    
                                </Rating>
                            </div>
                            <div>
                            <span className='fw-semibold text-warning'>{rating}</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
};

export default RecipesCard;