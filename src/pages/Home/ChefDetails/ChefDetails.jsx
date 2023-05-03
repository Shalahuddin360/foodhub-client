import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>This chef: {id}</h1>
        </div>
    );
};

export default ChefDetails;