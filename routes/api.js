const express       = require('express');
const router        = express.Router();

// imports models
const Ninja         = require('../models/ninjas');
const PuntoVendita  = require('../models/puntivendita');
const Patch         = require('../models/patch');

/////////////////////// GET REQUESTS ///////////////////////
// GET api/ninjas -> list of ninjas from the db
router.get('/ninjas', function(req, res, next){
    Ninja.find().then(function(ninja){
        res.send({ninja});
    });
});

// GET api/pv -> list of pv from the db
router.get('/pv', function(req, res, next){
    PuntoVendita.find().then(function(pv){
        res.send({pv});
    });
});

// GET api/patch -> list of patch from the db
router.get('/patch', function(req, res, next){
    Patch.find().then(function(patch){
        res.send({patch});
    });
});

/////////////////////// POST REQUESTS ///////////////////////
// POST api/ninjas -> add new pv from the db
router.post('/ninjas', function(req, res, next){

    // init obj with the request's body and save to db
    Ninja.create(req.body).then(function(ninja){
        res.send({ninja});
    }).catch(next);
});

// POST api/pv -> add new pv from the db
router.post('/pv', function(req, res, next){

    // init obj with the request's body and save to db
    PuntoVendita.create(req.body).then(function(pv){
        res.send({pv});
    }).catch(next);
});

// POST api/patch -> add new patch from the db
router.post('/patch', function(req, res, next){

    // init obj with the request's body and save to db
    Patch.create(req.body).then(function(patch){
        res.send({patch});
    }).catch(next);
});

/////////////////////// PUT REQUESTS ///////////////////////
// PUT api/ninjas/7 -> update ninjas from the db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(ninja){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send({ninja});
        });
    });
});

// PUT api/pv/7 -> update pv from the db
router.put('/pv/:id', function(req, res, next){
    PuntoVendita.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(pv){
        PuntoVendita.findOne({_id: req.params.id}).then(function(pv){
            res.send({pv});
        });
    });
});

// PUT api/patch/7 -> update patch from the db
router.put('/patch/:id', function(req, res, next){
    Patch.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(patch){
        Patch.findOne({_id: req.params.id}).then(function(patch){
            res.send({patch});
        });
    });
});

/////////////////////// DELETE REQUESTS ///////////////////////
// DELETE api/ninjas/7 -> delete ninjas from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send({ninja});
    });
});

// DELETE api/pv/7 -> delete pv from the db
router.delete('/pv/:id', function(req, res, next){
    PuntoVendita.findByIdAndRemove({_id: req.params.id}).then(function(pv){
        res.send({pv});
    });
});
 
// DELETE api/patch/7 -> delete patch from the db
router.delete('/patch/:id', function(req, res, next){
    Patch.findByIdAndRemove({_id: req.params.id}).then(function(patch){
        res.send({patch});
    });
});

module.exports = router;