import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Card = () => {

    const mealDetails = useLoaderData().meals[0];

    const {idMeal, strMeal,  } = mealDetails;

    console.log(mealDetails)


    return (
        <div>
            this is card component
        </div>
    );
};

export default Card;

// working page 