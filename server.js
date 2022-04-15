const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan');
const path = require('path')
require("dotenv").config()
const cors = require("cors");

/////// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true, limit: '100mb'}));
app.use(express.json({limit: '100mb'}));
app.use(logger('dev')); 
app.use('/api', routes);
app.use(cors());



db.on('error', console.error.bind(console, 'MongoDB connection error:'));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
}


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));