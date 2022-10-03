import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Card = () => {

    const mealDetails = useLoaderData().meals[0];

    const {idMeal, strMeal, strCategory, strInstructions, strMealThumb, strYoutube  } = mealDetails;

    console.log(mealDetails)


    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-1 p-4 bg-gray-100'>
            <img src={strMealThumb} alt="Meal Picture" />
            <div>
                <h2 className='text-3xl font-bold'>{strMeal}</h2>
                <p>Category: {strCategory}</p>
                <p className='mb-4'><strong>Instructions: </strong>{strInstructions}</p>
                <a className='bg-red-500 text-white font-bold py-2 px-4' href={strYoutube}>See Video</a>
            </div>
        </div>
    );
};

export default Card;

// working page 