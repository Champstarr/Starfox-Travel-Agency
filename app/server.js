//INIT AND LIBRARIES

var express = require('express');
var app = express();



//MIDDLEWARE


app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

//ROUTES

app.get('/', function(req,res){
  res.render('./index.ejs', {
    myname: "so annoying"
  });
});

module.exports.app = app;