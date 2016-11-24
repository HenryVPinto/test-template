var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
var path    = require("path");

app.use('/node-modules', express.static('app/node-modules'));
app.use('/bower_components', express.static('bower_components'));
app.use('/scripts', express.static('app/scripts'));
app.use('/styles', express.static('app/styles'));
app.use('/fonts', express.static('app/fonts'));
app.use('/images', express.static('app/images'));
app.use('/app', express.static('app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/app/index.html'));
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.listen(process.env.PORT || 3000);
console.log("Running at Port 3000");

module.exports = app;
