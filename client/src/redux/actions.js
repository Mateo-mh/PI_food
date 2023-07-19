import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';

export const getRecipes = () => {
  return async function (dispatch) {
    const apiKey = '5edec2c7467f4f0f8fe0efc39718903f';
    const apiData = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`);
    const recipes = apiData.data.recipes; // Asegurémonos de obtener el array de recetas correctamente
    dispatch({ type: GET_RECIPES, payload: recipes });
  };
};

