"use strict"

// Importing packages and files

const express = require("express");
const validator = require("../middleware/validator.js");
const foodFunctions = require("../controllers/food.js");
const router = express.Router();

// Routers

router.get("/", foodFunctions.getFood);
router.get("/:id", validator, foodFunctions.getFoodById);
router.post("/", foodFunctions.createFood);
router.put("/:id", validator, foodFunctions.updateFood);
router.delete("/:id", validator, foodFunctions.deleteFood);

module.exports = router;