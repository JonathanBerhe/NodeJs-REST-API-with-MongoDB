const express       = require('express');
const router        = express.Router();

// imports models
const Maschine      = require('../models/maschines');
const Package         = require('../models/packages');

/////////////////////// GET REQUESTS ///////////////////////

// GET api/maschine -> list of maschine from the db
router.get('/maschine', function(req, res, next){
    Maschine.find().then(function(maschine){
        res.send({maschine});
    });
});

// GET api/patch -> list of patch from the db
router.get('/patch', function(req, res, next){
    Package.find().then(function(patch){
        res.send({patch});
    });
});

/////////////////////// POST REQUESTS ///////////////////////

// POST api/maschine -> add new maschine from the db
router.post('/maschine', function(req, res, next){

    // init obj with the request's body and save to db
    Maschine.create(req.body).then(function(maschine){
        res.send({maschine});
    }).catch(next);
});

// POST api/package -> add new package from the db
router.post('/package', function(req, res, next){

    // init obj with the request's body and save to db
    Package.create(req.body).then(function(package){
        res.send({package});
    }).catch(next);
});

/////////////////////// PUT REQUESTS ///////////////////////

// PUT api/maschine/7 -> update maschine from the db
router.put('/maschine/:id', function(req, res, next){
    Maschine.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(maschine){
        Maschine.findOne({_id: req.params.id}).then(function(maschine){
            res.send({maschine});
        });
    });
});

// PUT api/package/7 -> update package from the db
router.put('/package/:id', function(req, res, next){
    Package.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(package){
        Package.findOne({_id: req.params.id}).then(function(package){
            res.send({package});
        });
    });
});

/////////////////////// DELETE REQUESTS ///////////////////////

// DELETE api/maschine/7 -> delete maschine from the db
router.delete('/maschine/:id', function(req, res, next){
    Maschine.findByIdAndRemove({_id: req.params.id}).then(function(maschine){
        res.send({maschine});
    });
});
 
// DELETE api/package/7 -> delete package from the db
router.delete('/package/:id', function(req, res, next){
    Package.findByIdAndRemove({_id: req.params.id}).then(function(package){
        res.send({package});
    });
});

module.exports = router;