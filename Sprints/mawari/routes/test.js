var express = require('express');
var rr = express.Router();

/* GET users listing. */
rr.get('/', function(req, res, next) {
  res.send('testss');
});

module.exports = rr;