"use strict"

const server = require("./src/server.js");
const mongoose = require("mongoose");


// Running the Server

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => {
  server.start(server.port);

  })
  .catch(e => {
  console.log(`__CONNECTION ERROR__`, e.message);
  })
