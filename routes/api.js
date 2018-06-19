const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninjas');

// GET api/ninjas -> list of ninjas from the db
router.get('/ninjas', function(req, res, next){
    Ninja.find().then(function(ninja){
        res.send({ninja});
    });
});

// POST api/ninjas -> add new ninjas from the db
router.post('/ninjas', function(req, res, next){

    // init obj with the request's body and save to db
    Ninja.create(req.body).then(function(ninja){
        res.send({ninja});
    }).catch(next);
});

// PUT api/ninjas/7 -> update ninjas from the db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(ninja){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send({ninja});
        });
    });
});

// DELETE api/ninjas/7 -> delete ninjas from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send({ninja});
    });
});

module.exports = router;