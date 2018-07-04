// var express =   require('express');
// var bodyParser =    require('body-parser');
// var multer  =   require('multer');
// var app =   express();

// var test = app.require('./testingfile');

// app.use(bodyParser.json());

// app.use('/uploads', express.static(__dirname + '/uploads'));

// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.fieldname + '-' + Date.now());
//   }
// });
// var upload = multer({ storage : storage }).array('userPhoto',2);

// app.get('/',function(req,res){
//       res.sendFile(__dirname + "/index.html");
// });

// app.post('/api/photo',function(req,res){
//     upload(req,res,function(err) {
//         //console.log(req);
//       //  console.log(req.body);
//         console.log(req.files);
//         if(err) {
//             return res.end("Error uploading file.");
//         }
//         res.end("File is uploaded");
//     });
// });

// app.listen(3333,function(){
//     console.log("Working on port 3000");
// });


var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/temp/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);