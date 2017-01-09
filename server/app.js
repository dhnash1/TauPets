var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // punch in requirements
var route = require('./routes/route.js');
var port = process.env.PORT || 1337;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


var mongoBase = "mongodb://localhost:27017/PetsProject"; //assigns the URL(?), of the mongo Databae to a var
var DBconnect = mongoose.connect(mongoBase).connection; //connects to that DB

app.listen(port, function(req, res) {
    console.log("listening on that leet port", port);
}); //server listening


app.use("/route", route); // use the router

app.use(express.static("public")); //make the public folder public...
