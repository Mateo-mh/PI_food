const axios = require("axios")
const { Recipe, Diet } = require("../db")
const { RecipesTransformer } = require("../Functions/mainFunction")

const postRecipeController = async (req, res) => {
  try {
    const { name, image, summary, healthScore, steps, diets } = req.body

    // Validations
    if (!name || !image || !summary || !healthScore || !steps || !diets) {
      return res.status(401).send("Faltan datos")
    }

    // Create the Recipe model
    const createdRecipe = await Recipe.create({ name, image, summary, healthScore, steps })

    // Create the Diet model(s)
    if (diets.length > 1) {
      const promises = diets.map(diet => {
        let foundDiet = Diet.findOne({ where: { name: diet } })
        if (!foundDiet)
          return Diet.create({ name: diet })
        return foundDiet
      })

      const createdDiets = await Promise.all(promises)

      for (const diet of createdDiets) {
        await createdRecipe.setDiet(diet)
      }
    } else {
      let foundDiet = await Diet.findOne({ where: { name: diets[0] } })
      if (!foundDiet) {
        const createdDiet = await Diet.create({ name: diets[0] })
        await createdRecipe.setDiet(createdDiet)
      } else {
        await createdRecipe.setDiet(foundDiet)
      }
    }

    return res.status(200).json("Se cargó correctamente")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = postRecipeController
