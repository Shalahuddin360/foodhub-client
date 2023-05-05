import React from 'react';
import { Button, ButtonGroup, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesCard = ({ recipes }) => {
    // console.log(recipes)
    const { recipe_id, recipe_name, ingredients, methodOfCooking, rating, author } = recipes
    const notify = () => toast("Add To Favorite!");
    return (
        <Container>
            <Row>
                <Col>
                    <Card className=" shadow-lg p-3 bg-body-tertiary rounded">

                        <Card.Header className=' d-flex align-items-center'>

                            <div className='flex-grow-1'>
                                <Image style={{ height: '40px' }} src={author?.chefPicture} className='rounded-circle img-fluid'></Image>
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
                                    {methodOfCooking < 250 ? { methodOfCooking } : <>{methodOfCooking.slice(0, 250)}...
                                        <Link to={`/recipes/${recipe_id}`}>Read More </Link></>}

                                </p>

                                <Button className='text-center' onClick={notify} variant="outline-primary">Add To Favorite</Button>
                                <ToastContainer/>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex align-items-center">
                            <div className='flex-grow-1'>
                                <Rating
                                    style={{ maxWidth: 200 }}
                                    value={Math.round(rating || 0)} readonly />

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