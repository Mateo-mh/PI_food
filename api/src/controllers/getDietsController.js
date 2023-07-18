const axios = require("axios");
const { Diet } = require("../db");


const getDietsController = async (req, res) => {
  try {
    const diets = await Diet.findAll();
    res.json(diets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los tipos de dieta' });
  }
};

module.exports = getDietsController;
