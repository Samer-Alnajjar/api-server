"use strict"
const mongoose = require("mongoose");

const clothesSchema = mongoose.Schema({
  name: { type: String, required: true}
})

const clothesModel = mongoose.model("person", clothesSchema);

module.exports = clothesModel;