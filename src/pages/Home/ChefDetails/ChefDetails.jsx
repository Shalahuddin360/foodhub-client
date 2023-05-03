import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipesCard from '../RecipesCard/RecipesCard';
import { Button, Card, Container, Row } from 'react-bootstrap';


const ChefDetails = () => {

    const { id } = useParams();
    const chefRecipes = useLoaderData();
    return (
        <Container>
            {/* <h1>This chef: {id}</h1> */}
            <h1>This chef recipes: {chefRecipes.length}</h1>


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