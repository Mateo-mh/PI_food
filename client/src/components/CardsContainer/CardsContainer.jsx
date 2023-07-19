import React from 'react';
import Card from '../Card/Card.jsx';
import { useSelector } from 'react-redux';

const RECIPES_PER_PAGE = 100;
const CardsContainer = () => {
  const recipes = useSelector(state => state.recipes)
  const currentPage = useSelector((state) => state.currentPage);

  const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
  const paginatedRecipes = recipes.slice(startIndex, startIndex + RECIPES_PER_PAGE);

 
  return (
    <div>
      {paginatedRecipes.map((recipe) => (
        <Card
          key={recipe.id}
          name={recipe.name}
          resume={recipe.resume}
          healthScore={recipe.healthScore}
          diets={recipe.diets}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

export default CardsContainer;

