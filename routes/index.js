var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET names. */
router.get('/names', function(req, res, next) {
  res.render('names', { title: 'Names' });
});

router.get('/test', (req, res) => {
  res.send('Hello World!');
});

router.post('/test', (req, res) => {
  res.send('Hello World!'+req.body);
});

module.exports = router;
