"use strict"

// Importing packages and files

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');
require("dotenv").config();

// Configuring packages

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Routes 

/**
 * This function responsible for the clothes route
 */

app.use('/api/v1/clothes/', clothesRouter);

/**
 * This function responsible for the food route
 */

app.use('/api/v2/food/', foodRouter);

/**
 * This function responsible for the error handler
 */

app.use(errorHandler);

/**
 * This function responsible for the not found handler
 */

app.use('*', notFoundHandler);



// Listening to Server inside index.js

module.exports = {
  server:app,
  start: (port) => {
    app.listen(port, () => console.log(`Listening on PORT ${port} `));
  },
  port: PORT
}
