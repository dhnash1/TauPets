var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var petMaker = new Schema({
  name : {type: String, required : true },
  species : {type: String, required : true},
  age : Number,
  image : {type: String}
});
var petCreate = mongoose.model('assembler', petMaker);
module.exports = petCreate;
