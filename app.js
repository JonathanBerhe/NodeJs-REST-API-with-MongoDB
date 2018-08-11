const express       = require('express');
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');

// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost');
mongoose.Promise = global.Promise; // global promise lib

// middleware for parsing json body
app.use(bodyParser.json());

// init routes
app.use('/api', require('./routes/api'));

// error handling
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})

// listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for request');
}); 