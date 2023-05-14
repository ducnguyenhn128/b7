const express = require('express');
const router = require('./src/controllers/router')
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const app = express();
// For handlebars
const path = require('path');
const {engine} = require('express-handlebars')

// Body parser
app.use(bodyParser.json())

// HandleBars Template Engine
app.engine('hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/src/views'))

// console.log('PATH: ', path.join(__dirname), 'views')

// API End Point
app.get('/', (req, res) => {
    // res.status(200).send(`Halaooooo`)
    res.render('home')
})

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
})