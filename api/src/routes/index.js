const { Router } = require('express');
const { getRecipeHandler, 
    getIdHandler, 
    getNameHandler, 
    postRecipeHandler, 
    getDietsHandler } = require('../handlers/mainHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

mainRouter.get("/", getRecipeHandler)

mainRouter.get("/recipes/:idRecipe", getIdHandler)
  
mainRouter.get("/recipes", getNameHandler)

mainRouter.post("/recipes", postRecipeHandler)
  
mainRouter.get("/diets", getDietsHandler)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
