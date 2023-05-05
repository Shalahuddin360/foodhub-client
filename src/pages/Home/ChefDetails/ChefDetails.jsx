import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import RecipesCard from '../RecipesCard/RecipesCard';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';



const ChefDetails = () => {

    const { id } = useParams();
    const chefRecipes = useLoaderData();
    const selectChefDetails = chefRecipes .find(r => r.chef_id == id);
    // console.log("selectedChef",selectChefDetails);
    const {author} =selectChefDetails
    // const {chefPicture,chef_name,chef_description,likes,numberOfRecipes,yearsOfExperience} = author
    return (
        <Container>
         
            <Container className='shadow-lg p-3 bg-body-tertiary rounded mb-3'>
            <h2 className='text-center fw-bold'>Chef  Description</h2>

            <Row xs={1} md={1} lg={1}>

                <Col>
                    <Card className="text-center">
                        <Card.Header>
                            <Card.Img className='object-fit-cover border rounded' variant="top" src={author?.chefPicture} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Name : {author?.chef_name}</Card.Title>
                            <Card.Text>
                              <div>  
                              <p className='fw-semibold'> <span className='fw-bold'>Description:</span> {author?.chef_description}</p>
                                <p className='fw-semibold'> Experience:<span className='text-warning text ms-3'>{author?.yearsOfExperience}</span> Year</p>
                                <p className='fw-semibold'>Number Of Recipes : <span className='text-warning ms-3'>{author?.numberOfRecipes}</span> </p>
                                <p className='fw-semibold'>Likes :<span className='text-warning ms-3'> {author?.likes}</span></p>
                              </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">  
                        
                        <Link to="/" ><Button variant="primary"> Back To Home Page</Button></Link>
                        </Card.Footer>
                    </Card>
                </Col>

            </Row>
        </Container>

            <h1 className='text-center'>This chef recipes: {chefRecipes.length}</h1>

            
            <Row xs={1} md={2} lg={3} className='g-4 mt-5'>

                {
                    chefRecipes.map(recipes => <RecipesCard
                        key={recipes.recipe_id}
                        recipes={recipes}

                    ></RecipesCard>)
                }

            </Row>
        </Container>
    );
};

export default ChefDetails;