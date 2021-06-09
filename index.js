'use strict';
const express = require('express');
const {json} = require('express');
const cors = require('cors');
const morgan = require('morgan')

// const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/userRoutes')

// create an express app
const app = express();

//middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(json());

app.use('/api', userRoutes.routes)

app.listen(config.port, () => console.log('app listen on port' + config.port))

module.exports = app;