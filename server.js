var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Article = require("./models/Article.js");

var app = express();

//Need mongoose connection

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

app.get("/api/saved", function(req, res) {
  Article.find({}, function(err, doc){
    if (err) throw err;
    res.send(doc);
  })
});

app.post("/api/saved", function(req, res) {
  var newArticle = new Article({title: req.body.title, date: req.body.date, url:req.body.url});
  newArticle.save(function(err, doc){
    if (err) throw err;
    res.send(doc);
  })
});

app.post("/api/saved/delete", function(req, res) {
  Article.remove({title:req.body.title}, function(data){
  });
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT|| 3000, function() {
  console.log("App running on port 3000!");
});