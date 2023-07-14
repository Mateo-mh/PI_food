const axios = require("axios");
const { Recipe } = require("../db");
const { RecipesTransformer } = require("../Functions/mainFunction");
const { apiKey, dietaFlag } = require("../../addEndPoint");

const getIdController = async (req, res) => {
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  try {
    const { id } = req.params;
    let obj = "";

    if (uuidPattern.test(id)) {
      obj = await Recipe.findOne({ where: { id } });
    }

    if (!obj) {
      const { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information${apiKey}${dietaFlag}`);
      obj = RecipesTransformer(data);
    }

    res.status(200).json(obj);
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = getIdController;
