const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes');
const apiRoutes = require('./routes/htmlRoutes');