const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const routes = require('./routes/rotas')
const express = require('express');
const app = express();
 
app.use(express.json());
app.use(routes);
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));