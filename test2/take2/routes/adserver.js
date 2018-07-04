var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
//var Book = require('../models/Book.js');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Express RESTful API');
// });

// formidable

// var formidable = require('formidable');

// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);



// /* GET ALL BOOKS */
// router.get('/', function(req, res, next) {
//     Book.find(function (err, products) {
//       if (err) return next(err);
//       res.json(products);
//     });
//   });
  
//   /* GET SINGLE BOOK BY ID */
//   router.get('/:id', function(req, res, next) {
//     Book.findById(req.params.id, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
  
//   /* SAVE BOOK */
//   router.post('/', function(req, res, next) {
//     Book.create(req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
  
//   /* UPDATE BOOK */
//   router.put('/:id', function(req, res, next) {
//     Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });
  
//   /* DELETE BOOK */
//   router.delete('/:id', function(req, res, next) {
//     Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//       if (err) return next(err);
//       res.json(post);
//     });
//   });




module.exports = router;