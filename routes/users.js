var express = require('express');
const { default: mongoose } = require('mongoose');
var mongo = require('mongoose');
var router = express.Router();


/* connect to mongo db */
mongo.connect("mongodb+srv://cheriyan:kadachira@cluster1.5come.mongodb.net/expressapp?retryWrites=true&w=majority", function(error){
  if(!error){
    console.log("db connected! :-)");
  } else{
    console.log("db connection error!");
  }
});

var schema = new mongoose.Schema({
  name: String,
  id: Number,
  role: String,
  username: String
});
var document = mongoose.model("users", schema);

/* GET users listing. */
router.get('/', async function(req, res, next) {
  
  var a = await document.find({});
  console.log(a);

  res.header('Content-Type', 'application/json');
  res.send(a);
});

router.post('/', async function(req, res, next) {

  await document.insertMany([req.body]);

  res.header('Content-Type', 'application/json');
  res.send(req.body);
});

module.exports = router;
