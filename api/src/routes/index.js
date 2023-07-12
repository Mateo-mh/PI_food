const { Router } = require('express');
const getIdController = require("../controllers/getIdController")
const getNameController = require("../controllers/getNameController")
const postRecipeController = require("../controllers/postRecipeController")
const getDietsController = require("../controllers/getDietsController")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const mainRouter = Router();

mainRouter.get("/recipes/:id", async (req,res) => {
    getIdController(req,res)
})
  
mainRouter.get("/recipes", async (req,res) => {
    getNameController(req,res)
})

mainRouter.post("/recipes", async (req,res) => {
    postRecipeController(req,res)
})
  
mainRouter.get("/diets", async (req,res) => {
    getDietsController(req,res)
})


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
