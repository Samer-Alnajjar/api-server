"use strict"

// Importing packages and files

const express = require("express");
const validator = require("../middleware/validator");
const clothesFunctions = require("../controllers/clothes.js");
const router = express.Router();

// Routers

router.get("/", clothesFunctions.getClothes);
router.get("/:id", validator, clothesFunctions.getClothesById);
router.post("/", clothesFunctions.createClothes);
router.put("/:id", validator, clothesFunctions.updateClothes);
router.delete("/:id", validator, clothesFunctions.deleteClothes);


module.exports = router;