const express = require('express');
const router = express.Router();

// GET api/ninjas -> list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// POST api/ninjas -> add new ninjas from the db
router.post('/ninjas', function(req, res){
    res.send({type: 'POST'});
});

// PUT api/ninjas/7 -> update ninjas from the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// DELETE api/ninjas/7 -> delete ninjas from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;