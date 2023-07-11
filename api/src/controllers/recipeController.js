const { Recipe, Diet } = require('../db.js');

const recipeCreate = async (req, res) => {
  try {
    const { name, image, summary, healthScore, steps, diets } = req.body;

    // Crear la receta en la base de datos
    const newRecipe = await Recipe.create({
      name,
      image,
      summary,
      healthScore,
      steps,
    });

    // Buscar los tipos de dieta en la base de datos
    const selectedDiets = await Diet.findAll({
      where: {
        name: diets // Array con los nombres de los tipos de dieta seleccionados
      }
    });

    // Establecer la relación entre la receta y los tipos de dieta
    await newRecipe.setDiets(selectedDiets);

    res.status(201).json(newRecipe);
  } catch (error) {
    console.error('Error al crear la receta:', error);
    res.status(500).json({ message: 'Error al crear la receta' });
  }
};

module.exports = {
  recipeCreate,
};