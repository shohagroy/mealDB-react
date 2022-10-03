import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({meal}) => {

    const {idMeal, strMeal, strCategory, strMealThumb, strInstructions} = meal;


    return (
        <div className='m-3 border border-black max-w-[400px] relative'>
            <img className='h-[250px] w-[100%]' src={strMealThumb} alt="Meal-Picture" />
            <div className='p-4 mb-10'>
                <h3 className='text-3xl font-bold'>{strMeal}</h3>
                <h4 className='text-xl'>Categoty: {strCategory}</h4>
                <p><strong>Intro: </strong>{strInstructions.slice(1, 150)}...</p>
            </div>

            <Link className='bg-blue-300 absolute bottom-0 w-full text-center py-2 font-bold text-white' to={`/meal/${idMeal}`}>See All</Link>
            
        </div>
    );
};

export default MealCard;