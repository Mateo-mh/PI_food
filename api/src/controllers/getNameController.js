const axios = require("axios")
const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=5edec2c7467f4f0f8fe0efc39718903f&number=100&addRecipeInformation=true&number=100"
const { Recipe, Diet } = require("../db")
const { findAllEndPoint } = require("../../addEndPoint")
const { Op } = require("sequelize")
//Mis funciones 
const { RecipesTransformer } = require("../Functions/mainFunction")


async function getNameController(req, res) {
    try {
        //Pedimos la query
        const nombre = req.query.name
        //Instanciamos los arreglos 
        let foundRecipesBd = []
        let foundRecipesApi = []

        if (!nombre) {
            console.log("PAsas");
            foundRecipesBd = await Recipe.findAll({ include: Diet })
            //Agregamos una propiedad a las recipes traidas de la base de datos
            if (foundRecipesBd) {
                foundRecipesBd.forEach((recipe) => recipe.dataValues.dataBase = true)
                console.log(foundRecipesBd);
            }
            const { data } = await axios.get(findAllEndPoint)

            foundRecipesApi = data.results
            const resul = foundRecipesApi.map((recipe) => RecipesTransformer(recipe))


            return res.status(200).json([...foundRecipesBd, ...resul])
        }


        //Buscar en la base de datos 
        const name = nombre.toLowerCase()
        foundRecipesBd = await Recipe.findAll(
            {
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            }
            )
            //Bucamos en la api
            const { data } = await axios.get(findAllEndPoint)
            foundRecipesApi = data.results.filter((recipe) => recipe.title.toLowerCase().includes(name))
            console.log("sigue");

        let recipesTransformed = foundRecipesApi.map((recipe) => {
            return RecipesTransformer(recipe)
        })
        const recipes = [...foundRecipesBd, ...recipesTransformed]
        return res.status(200).json(recipes)



    } catch (error) {
        return res.status(500).send('Entra a este catch')

    }

}
module.exports = getNameController