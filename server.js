const express = require('express');
const routes = require('./routes');
const db = require('./db');
const logger = require('morgan');


/////// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true, limit: '100mb'}));
app.use(express.json({limit: '100mb'}));
app.use(logger('dev')); 
app.use('/', routes);



db.on('error', console.error.bind(console, 'MongoDB connection error 1:'));


if(process.env.NODE_ENV === 'production'){    
    app.use(express.static('client/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('*',(req,res)=>{     
        res.sendFile (path.resolve(__dirname,'frontend','build','index.html' ));    
    });
}

module.exports = db;

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));