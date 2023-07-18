const axios = require("axios")
const { Recipe, Diet } = require("../db")
const { RecipesTransformer } = require("../Functions/mainFunction")

const postRecipeController = async (req, res) => {
  try {
    const { name, image, summary, healthScore, steps, diets } = req.body;

    // Validations
    if (!name || !image || !summary || !healthScore || !steps || !diets) {
      return res.status(400).json({ error: "Faltan datos en el cuerpo de la solicitud." });
    }

    // Create the Recipe model
    const createdRecipe = await Recipe.create({ name, image, summary, healthScore, steps });

    // Create the Diet model(s)
    if (diets.length > 1) {
      const promises = diets.map(async (diet) => {
        let foundDiet = await Diet.findOne({ where: { name: diet } });
        if (!foundDiet) {
          foundDiet = await Diet.create({ name: diet });
        }
        return foundDiet;
      });

      const createdDiets = await Promise.all(promises);

      // Asociar la receta con los tipos de dieta
      await createdRecipe.setDiets(createdDiets);
    } else {
      let foundDiet = await Diet.findOne({ where: { name: diets[0] } });
      if (!foundDiet) {
        const createdDiet = await Diet.create({ name: diets[0] });
        await createdRecipe.setDiets([createdDiet]);
      } else {
        await createdRecipe.setDiets([foundDiet]);
      }
    }

    return res.status(201).json({ message: "Receta creada exitosamente.", createdRecipe });
  } catch (error) {
    return res.status(500).json({ error: "Hubo un error al crear la receta.", errorMessage: error.message });
  }
};

module.exports = postRecipeController;