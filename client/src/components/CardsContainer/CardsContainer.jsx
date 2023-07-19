// import axios from 'axios';
import Card from '../Card/Card.jsx';
import { useSelector } from 'react-redux';

const CardsContainer = () => {
  const recipes = useSelector(state => state.recipes)
  return (
    <div>
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          name={recipe.title}
          summary={recipe.summary}
          healthScore={recipe.healthScore}
          diets={recipe.diets}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
