"use strict"

// Importing packages and files

const Food = require("../models/food.js");

// Creating object from the class "Clothes"

const food = new Food;

// Control functions

function getFood(req, res) {
  const resObj = food.read();
  res.json(resObj);
}

function getFoodById(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

function createFood(req, res) {
  const foodObject = req.body;
  const resObj = food.create(foodObject);
  res.status(201).json(resObj);
}

function updateFood(req, res) {
  const foodObject = req.body;
  const resObj = food.update(req.params.id, foodObject);
  res.status(204).json(resObj);
}

function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}

module.exports = {
  getFood: getFood,
  getFoodById : getFoodById, 
  createFood : createFood,
  updateFood : updateFood,
  deleteFood : deleteFood
}