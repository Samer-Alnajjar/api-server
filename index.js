"use strict"

const server = require("./src/server.js");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true , useUnifiedTopology: true})
  .then(() => {
  server.start(server.port);

  })
  .catch(e => {
  console.log(`__CONNECTION ERROR__`, e.message);
  })

// Running the Server