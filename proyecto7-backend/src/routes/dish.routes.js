const express = require('express');
const { getAllDishes, createDish, updateDishById, deleteDishById, getDishesByRegion } = require('../controllers/dish.controller');

const dishRouter = express.Router();

dishRouter.get('/', getAllDishes); // localhost:3000/dishes
dishRouter.post('/', createDish); // localhost:3000/dishes
dishRouter.get('/region/:region', getDishesByRegion); // localhost:3000/dishes/region/:region
dishRouter.put('/:id', updateDishById); // localhost:3000/dishes/:id
dishRouter.delete('/:id', deleteDishById); // localhost:3000/dishes/:id

module.exports = dishRouter;
