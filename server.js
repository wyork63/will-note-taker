const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

// routes to load page
app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

// establish connection
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});