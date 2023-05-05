import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefCard = (props) => {
    const { chef } = props
    const { chef_id, chef_name, chefPicture, chef_description, numberOfRecipes, yearsOfExperience, likes
    } = chef
    // console.log(props.chef)
    return (
    <CardGroup className='shadow-lg p-3 bg-body-tertiary rounded'>
      <Card >
        <Card.Img className='object-fit-cover border rounded' variant="top" src={chefPicture} />
        <Card.Body>
          <Card.Title>Name: {chef_name}</Card.Title>
          <Card.Text>
           <p className='fw-semibold'>Experience:<span className='text-warning text ms-3'>{yearsOfExperience}</span> Year</p>
           <p className='fw-semibold'>Number Of Recipes : <span className='text-warning ms-3'>{numberOfRecipes}</span> </p>
           <p className='fw-semibold'>Likes :<span className='text-warning ms-3'> {likes}</span></p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <button variant="danger"><Link to={`/chef/${chef_id}`} className='text-decoration-none'>View Recipes</Link></button>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
};

export default ChefCard;