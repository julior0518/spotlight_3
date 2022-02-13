const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan');


/////// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true, limit: '25mb'}));
app.use(express.json({limit: '25mb'}));
app.use(logger('dev')); 
app.use('/', routes);



db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));