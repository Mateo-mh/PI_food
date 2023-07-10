const getRecipeHandler = ((req, res) => {
    res.send('Get recipe exitoso');
  });

const getIdHandler = ((req, res) => {
    res.send('Get idRecipe exitoso');
  });
  
const getNameHandler = ((req, res) => {
    const { name } = req.query;
    res.send(`Get name exitoso: ${name}`);
    });

const postRecipeHandler = ((req, res) => {
    res.send('Post recipes exitoso');
  });
  
const getDietsHandler = ((req, res) => {
    res.send('Get diets exitoso');
  });

module.exports = {
    getRecipeHandler,
    getIdHandler,
    getNameHandler,
    postRecipeHandler,
    getDietsHandler
}