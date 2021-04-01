"use strict"

// Importing packages and files

const Clothes = require("../models/data-collection-class.js");
const clothesModel = require("../models/clothes/clothes.js");

// Creating object from the class "Clothes"

const clothes = new Clothes(clothesModel);

// Control functions

async function getClothes(req, res, next) {
  try {
    const resObj = await clothes.read();
    res.json(resObj);
  } catch(error) {
    next(error);
  }
  
}

// Just one example of using then instead of async functions

function getClothesById(req, res, next) {
  clothes.read(req.params.id)
    .then(resObj => {
      res.json(resObj);
    })
    .catch(error => {
      next(error);
    });
}

async function createClothes(req, res, next) {
  try {
    const clothesObject = req.body;
    const resObj = await clothes.create(clothesObject);
    res.status(201).json(resObj);
  } catch(error) {
    next(error);
  }
}

async function updateClothes(req, res) {
  try {
    const clothesObject = req.body;
    const resObj = await clothes.update(req.params.id, clothesObject);
    res.status(204).json(resObj);
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteClothes(req, res, next) {
  try{
    const resObj = await clothes.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getClothes: getClothes,
  getClothesById : getClothesById, 
  createClothes : createClothes,
  updateClothes : updateClothes,
  deleteClothes : deleteClothes
}