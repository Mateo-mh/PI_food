const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const mainRouter = Router();

mainRouter.get("/recipes/:idRecipe", (req, res) => {
    res.send('Get idRecipe exitoso');
  });
  
mainRouter.get("/recipes", (req, res) => {
    const { name } = req.query;
    res.send(`Get name exitoso: ${name}`);
    });

mainRouter.post("/recipes", (req, res) => {
    res.send('Post recipes exitoso');
  });
  
mainRouter.get("/diets", (req, res) => {
    res.send('Get diets exitoso');
  });


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
