import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealCard from '../MealCard/MealCard';

const Home = () => {
    const meals = useLoaderData().meals

    return (
        <div className='mt-10 grid md:grid-cols-3 max-w-fit md:gap-2 lg:gap-3 mx-auto'>
            {
                meals.map(meal => <MealCard key={meal.idMeal} meal={meal}/>)
            }
        </div>
    );
};

export default Home;


// https://www.themealdb.com/api/json/v1/1/search.php?s=egg