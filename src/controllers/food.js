"use strict"

// Importing packages and files

const Food = require("../models/data-collection-class.js.js");
const foodModel = require("../models/food/food.js");

// Creating object from the class "Clothes"

const food = new Food(foodModel);

// Control functions

async function getFood(req, res, next) {
  try{
    const resObj = await food.read();
    res.json(resObj);
  } catch(error) {
    next(error);
  }
}
  

async function getFoodById(req, res, next) {
  try{
    const resObj = await food.read(req.params.id);
    res.json(resObj);
  } catch(error) {
    next(error);
  }
}

async function createFood(req, res, next) {
  try {
    const foodObject = req.body;
    const resObj = await food.create(foodObject);
    res.status(201).json(resObj);
  } catch(error) {
    next(error);
  }
}

async function updateFood(req, res, next) {
  try {
    const foodObject = req.body;
    const resObj = await food.update(req.params.id, foodObject);
    res.status(204).json(resObj);
  } catch (error) {
    next(error);
  }
}

async function deleteFood(req, res, next) {
  try {
    const resObj = await food.delete(req.params.id);
    res.json(resObj);
  } catch(error) {
    next(error);
  }
}

module.exports = {
  getFood: getFood,
  getFoodById : getFoodById, 
  createFood : createFood,
  updateFood : updateFood,
  deleteFood : deleteFood
}