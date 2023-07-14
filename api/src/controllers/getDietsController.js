const axios = require("axios");
const { Diet } = require("../db");
const { apiKey, dietaFlag } = require("../../addEndPoint");

const getDietsController = async (req, res) => {
  try {
    let foundDietsBd = [];
    let foundDietsApi = [];
    const aux = await Diet.findAll();

    if (aux.length === 0) {
      const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=100${dietaFlag}`;
      const { data } = await axios.get(API_URL);

      const dietTypes = ["vegetarian", "vegan", "gluten free"];
      for (const recipe of data.results) {
        dietTypes.forEach(dietType => {
          if (recipe[dietType] && !foundDietsApi.includes(dietType)) {
            foundDietsApi.push(dietType);
          }
        });

        recipe.diets.forEach(element => {
          if (!foundDietsApi.includes(element)) {
            foundDietsApi.push(element);
          }
        });
      }

      return res.status(200).json(foundDietsApi);
    }

    aux.forEach(elem => foundDietsBd.push(elem.name));
    return res.status(200).json(foundDietsBd);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = getDietsController;
