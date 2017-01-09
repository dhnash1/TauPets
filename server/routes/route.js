var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var petCreate = require('../assemble/assembler');
//requirements and such

router.post('/', function(req, res) {
    var parts = req.body;
    console.log(parts);
    var newPet = new petCreate({
        name: parts.name,
        species: parts.species,
        age: parts.age,
        image: parts.image
    }); //puts together a new object from the provided inputs
    console.log(newPet);
    newPet.save(function(err) {
        if (err) {
            console.log("Not posted");
        } else {
            console.log("posted!");
            res.sendStatus(201); //saves it to the DB
        }
    });
});

router.get('/', function(req, res) {
    petCreate.find({}, function(err, results) {
        if (err) {
            console.log("Failed Get");
            res.sendStatus(500);
        } else {
            console.log("Get succeeded, sending back info...");
            res.send(results); //gets everything from the db
        }
    });
});


module.exports = router; //Exports the router(?)