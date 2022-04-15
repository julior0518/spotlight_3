const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan');



const mongoose = require('mongoose');
const path = require('path');       
require('dotenv').config();  
/////// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true, limit: '100mb'}));
app.use(express.json({limit: '100mb'}));
app.use(logger('dev')); 
app.use('/api', routes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }); 
mongoose.connection.once('open', () => {
    console.log('Connected to the Database mongoose.');
});
mongoose.connection.on('error', err => {
    console.log('Mongoose Connection Error mongoose: ' + err);
});



if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('client/build')) 
    app.get('*',(req,res)=>{     
        res.sendFile (path.resolve(__dirname,'client','build','index.html' ));    
    });
}

module.exports = db;


db.on('error', console.error.bind(console, 'MongoDB connection error 1:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));