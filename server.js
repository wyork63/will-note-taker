const express = require('express');
const notes = require('./routes/apiRoutes/notes');
const htmlRoutes = require('./routes/htmlRoutes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.static('public'));
// routes to load page
app.use('/api', notes);
app.use('/', htmlRoutes)

// establish connection
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});