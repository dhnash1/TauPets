var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // punch in requirements
var route = require('./routes/route.js');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var mongoBase = "mongodb://localhost:27017/PetsProject"; //assigns the URL(?), of the mongo Databae to a var
var DBconnect = mongoose.connect(mongoBase).connection; //connects to that DB

app.listen(1337, function() {
    console.log("listening on that leet port");
}); //server listening


app.use("/route", route); // use the router

app.use(express.static("public")); //make the public folder public...