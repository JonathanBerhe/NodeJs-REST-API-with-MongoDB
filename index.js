const express = require('express');

// set u exoress app
const app = express();

// GET api/
app.get('/', function(req, res){
    console.log('Get req');
    res.send({
        // send object
        name: 'Jonathan',
        cognome: 'Berhe'
    });
});


// listen for request
app.listen(process.env.port || 4000, function(){
    console.log('now listening for request');
});