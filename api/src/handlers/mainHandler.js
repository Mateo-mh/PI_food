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


const postRecipeHandler = async (req, res) => {
      try {
        await recipeCreate(req, res);
        res.status(200).send('Post recipes exitoso');
      } catch (error) {
        console.error('Error en el manejo de la solicitud POST:', error);
        res.status(500).send('Error en el manejo de la solicitud POST');
      }
    };
  
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