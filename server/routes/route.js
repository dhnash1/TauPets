var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var petCreate = require('../assemble/assembler');


router.post('/', function(req, res){
  var parts = req.body;
  console.log(parts);
  var newPet = new petCreate({
    name : parts.name,
    species : parts.species,
    age : parts.age,
    image : parts.image
  });
console.log(newPet);
newPet.save(function(err){
  if (err){
    console.log("Not posted");
  }else{
    console.log("posted!");
    res.sendStatus(201);
  }
});
});

  router.get('/', function(req, res){
    petCreate.find({}, function(err, results){
      if (err){
        console.log("Failed Get");
        res.sendStatus(500);
      }else{
        console.log("Get succeeded, sending back info...");
        res.send(results);
      }
    });
  });


module.exports = router;
