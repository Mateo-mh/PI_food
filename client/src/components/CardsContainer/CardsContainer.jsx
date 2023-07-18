import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card.jsx';

const CardsContainer = () => {
  const [recipes, setRecipes] = useState([]);

  // Hacer la llamada GET a la API de spoonacular para obtener las recetas
  useEffect(() => {
    const APIKey = '5edec2c7467f4f0f8fe0efc39718903f';
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKey}&number=100&addRecipeInformation=true`;

    const fetchRecipes = async () => {
      try {
        const response = await axios.get(URL);
        setRecipes(response.data.results);
      } catch (error) {
        console.error('Error al obtener las recetas:', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          name={recipe.title}
          resume={recipe.summary}
          healthScore={recipe.healthScore}
          diets={recipe.diets}
          image={recipe.image}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
