const axios = require("axios")
const URL = "https://api.spoonacular.com/recipes/complexSearch?apiKey=960565680fa546fba11fe01bb8e38180&number=100&addRecipeInformation=true&number=100"
const { Recipe, Diet } = require("../db")
const { findAllEndPoint } = require("../../addEndPoint")
const { Op } = require("sequelize")
//Mis funciones 
const { RecipesTransformer } = require("../Functions/mainFunction")


const postRecipeController = async (req, res) => {
    try {
        const { name, image, summary, healthScore, steps, diet } = req.body


        console.log("paso por aca");
        console.log(typeof diet);

        //Validaciones
        if (!name || !image || !summary || !healthScore || !steps || !diets) {
            return res.status(401).send("Faltan datos")
        }

        //Creamos el modelo recipe 
        const postRecipeController = await Recipe.create({ name, image, summary, healthScore, steps })


        //Creamos el modelo diet
        if (diet.length > 1) { // Preguntmaos si se nos cargo mas de una dieta en el array 
            
            //Cargamos todas las asincronias y las instancias en un array, en donde tambien preguntamos si 
            //existe una dieta ya existente con ese nombre 
            const promises = diet.map(diet => {
                let foundDiet = Diet.findOne({ where: { name: diet } })
                if (!foundDiet)
                    return Diets.create({ name: diet })
                return foundDiet
            })
            await Promise.all(promises). //Utilizamos un promise All para que capture todas las asincronias 
                then(async createdDiet => {
                    for (const diet of createdDiet) {
                        await postRecipeController.setDiet(diet) // Relacionamos todas las instancias de las diets con la recipe 
                    }
                }).
                catch(error => {
                    console.error('Error al crear las dietas:', error);
                })


        } else { // Es para el caso de que venga una sola dieta y hacemos lo mismo 

            let foundDiet = await Diet.findOne({ where: { name: diet[0] } })
            if (!foundDiet) {
                const createdDiet = await Diet.create({ name: diet[0] })
                await postRecipeController.setDiet(createdDiet)
            }
            else{
                await postRecipeController.setDiet(foundDiet)
            }
        }
        return res.status(200).json("Se cargo correctamente")

    } catch (error) {
        return res.status(500).send(error.message)

    }
}
module.exports = postRecipeController