const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan');


const path = require('path')

/////// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true, limit: '25mb'}));
app.use(express.json({limit: '25mb'}));
app.use(logger('dev')); 
app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));