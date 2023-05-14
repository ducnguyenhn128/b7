const express = require('express');
const router = require('./src/controllers/router')
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();
// For handlebars
const path = require('path');
const {engine} = requrie('express-handlebars')

// Body parser
app.use(bodyParser.json())

// HandleBars Template Engine

// API End Point
app.get('', (req, res) => {
    res.status(200).send(`Halooooo`)
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})