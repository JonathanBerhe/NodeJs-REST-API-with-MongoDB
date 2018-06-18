const express = require('express');
const bodyParser = require('body-parser');

// setup express app
const app = express();


// middleware for parsing json body
app.use(bodyParser.json());

// init routes
app.use('/api', require('./routes/api'));

// listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for request');
});